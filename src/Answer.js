import React from "react"

export default function Answer(props) {

    const selected = {
        backgroundColor: "#D6DBF5",
        color: "#293264"
    };

    const unselected = {
        backgroundColor: "#F4F4F5",
        color: "#293264",
    }

    const correctAnswer = {

        backgroundColor: "#94D7A2",
        color: "#293264"
    }

    const incorrectAnswer = {

        backgroundColor: "#94D7A2",
        color: "#293264",
        opacity: 0.3
    }

    let styles;

    if(props.answer === props.pickedAnswer && !props.gameEnd){
        styles = selected;
    }else if(props.answer === props.correctAnswer && props.gameEnd){
        styles = correctAnswer;
    }else if((props.answer === props.pickedAnswer) && (props.answer !== props.correctAnswer && props.gameEnd)){
        styles = incorrectAnswer;
    }else {
        styles = unselected;
    }

    return (
        <button className="answer-btn" onClick={() => props.chosenAnswer(props.answer, props.id)} style={styles}>
            {props.answer}  
        </button>
    )
}