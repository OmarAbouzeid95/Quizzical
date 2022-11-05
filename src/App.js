import './App.css';
import React from "react"
import Question from "./Question"

function App() {
  
  const [gameOn, setGameOn] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [gameEnd, setGameEnd] = React.useState(false);
  const [newGame, setNewGame] = React.useState(false);
  

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let questionsData = [];
        let id = 1;
        data.results.forEach(result => {
          const randomIndex = Math.floor(Math.random()*4);
          const allAnswers = [];
          let j = 0;
          for(let i=0; i<4; ++i){
            if(i === randomIndex){
              allAnswers.push(result.correct_answer);
            }else {
              allAnswers.push(result.incorrect_answers[j]);
              j++;
            }
          }
          const obj = {
            question: result.question,
            correctAnswer: result.correct_answer,
            answers: allAnswers,
            chosenAnswer: "",
            id: id
          }
          id++;
          questionsData.push(obj);
        })
        setQuestions(questionsData);
      });
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newGame]);

  function chosenAnswer(text, id){
    setQuestions(prevQuestions => prevQuestions.map(question => question.id === id ? {...question, chosenAnswer:text} : question ));
  }

  function evaluateAnswers(){
    let score = 0;
    questions.forEach(question => {
      if(question.chosenAnswer === question.correctAnswer)
        score++
    });
    return score;
  }

  function endGame(){
    let allAnswered = true;
    questions.forEach(question => {
      if(question.chosenAnswer === "")
        allAnswered = false;
    });
    if(allAnswered)
      setGameEnd(prevState => !prevState);
  }

  function newQuiz(){
    setGameEnd(prevState => !prevState);
    setNewGame(prevState => !prevState);
  }

  const questionsComponents = questions.map(question => {
    return <Question 
      question = {question.question}
      first_answer = {question.answers[0]}
      second_answer = {question.answers[1]}
      third_answer = {question.answers[2]}
      fourth_answer = {question.answers[3]}
      id = {question.id}
      key = {question.id}
      pickedAnswer = {question.chosenAnswer}
      chosenAnswer = {chosenAnswer}
      gameEnd = {gameEnd}
      correctAnswer = {question.correctAnswer}
    />
  })

  return (

    <div className = "app">
      
      {!gameOn && <div className="welcome-screen">
        <h1>Quizzical</h1>
        <p>Let's test your general knowledge!</p>  
        <button className="start-quiz" onClick={() => setGameOn(true)}>Start Quiz</button>
      </div>}

      {gameOn && <div className="quiz-container">
        {questionsComponents}

        <div className="footer-container">
          {gameEnd && <p className="score-line">You got {evaluateAnswers()}/5 correct answers!</p>}
          {!gameEnd && <button className="check-answers" onClick = {endGame}>Check Answers</button>}
          {gameEnd && <button className="new-quiz" onClick = {newQuiz}>New Quiz</button>}
        </div>
      </div>}

    </div>
  );
}

export default App;
