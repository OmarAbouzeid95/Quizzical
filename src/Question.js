import React from "react"
import Answer from "./Answer"

export default function Question(props){

    return (
        <div className="question-container">
            
            <h3>{props.question}</h3>
            <div className="answers-container">
                <Answer 
                    answer = {props.first_answer}
                    id = {props.id}
                    chosenAnswer = {props.chosenAnswer}
                    pickedAnswer = {props.pickedAnswer}
                    gameEnd = {props.gameEnd}
                    correctAnswer = {props.correctAnswer}
                />
                <Answer 
                    answer = {props.second_answer}
                    id = {props.id}
                    chosenAnswer = {props.chosenAnswer}
                    pickedAnswer = {props.pickedAnswer}
                    gameEnd = {props.gameEnd}
                    correctAnswer = {props.correctAnswer}
                />
                <Answer 
                    answer = {props.third_answer}
                    id = {props.id}
                    chosenAnswer = {props.chosenAnswer}
                    pickedAnswer = {props.pickedAnswer}
                    gameEnd = {props.gameEnd}
                    correctAnswer = {props.correctAnswer}
                />
                <Answer 
                    answer = {props.fourth_answer}
                    id = {props.id}
                    chosenAnswer = {props.chosenAnswer}
                    pickedAnswer = {props.pickedAnswer}
                    gameEnd = {props.gameEnd}
                    correctAnswer = {props.correctAnswer}
                />
            </div>
            <hr/>
        </div>
    )
}