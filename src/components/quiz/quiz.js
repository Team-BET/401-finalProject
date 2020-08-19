import React, { useState } from "react";
import { connect } from 'react-redux';
import * as actions from "../actions/songAction.js";


function Quiz(props) {
  const [quiz, setQuiz] = useState(false);
  const [prompt, setPrompt] = useState(<p></p>)

  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  
  let options = [props.wrongAnswerOne.artist.name, props.wrongAnswerTwo.artist.name, props.correctAnswer.artist.name]
  let randomOne = getRandomInt(3);
  let randomTwo = getRandomInt(3);
  let randomThree = getRandomInt(3);
  
  while(randomOne === randomTwo || randomOne === randomThree || randomTwo === randomThree) {
    randomTwo = getRandomInt(3);
    randomThree = getRandomInt(3);
  }
  const [a, setA] = useState(options[randomOne]);
  const [b, setB] = useState(options[randomTwo]);
  const [c, setC] = useState(options[randomThree]);

  
 const youAreCorrect = () =>{

  setPrompt(<p>You are correct </p>)
  props.correct()
 }
 const youAreInCorrect = () =>{
  setPrompt(<p>You are Incorrect </p>)
  props.inCorrect();
}
  
  let song = props.correctAnswer.artist.name
  let correctAnswer = null;
  if(a === song){
    correctAnswer = 'a';
  }
  if(b === song){
    correctAnswer = 'b';
  }
  if(c === song){
    correctAnswer = 'c';
  }
  let InputA = <span><input type="radio" onClick={correctAnswer === 'a' ? () => youAreCorrect() : () => youAreInCorrect()}/>{a}</span>
  let InputB = <span><input type="radio" onClick={correctAnswer === 'b' ? () => youAreCorrect() : () => youAreInCorrect()}/>{b}</span>
  let InputC= <span><input type="radio" onClick={correctAnswer === 'c' ? () => youAreCorrect() : () => youAreInCorrect()}/> {c}</span>


  return (
    <>
      <h4>Who is the Artist of this song?</h4>
      <form>
        {InputA}
        {InputB}
        {InputC}
      </form>
      {prompt}
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  correct: () => dispatch(actions.addCorrect()),
  inCorrect: () => dispatch(actions.addInCorrect())
});


export default connect(null, mapDispatchToProps)(Quiz)

