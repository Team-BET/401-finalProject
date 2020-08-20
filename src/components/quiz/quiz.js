import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/songAction.js";
import { When } from "react-if";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function Quiz(props) {
  console.log('props', props)
  const [quiz, setQuiz] = useState(false);
  const [prompt, setPrompt] = useState(<p></p>);

  const [active, setActive] = useState(true);
  const {user} = useAuth0();
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  let options = [
    props.wrongAnswerOne.artist.name,
    props.wrongAnswerTwo.artist.name,
    props.correctAnswer.artist.name,
  ];
console.log("option", options)

  let randomOne = getRandomInt(3);
  let randomTwo = getRandomInt(3);
  let randomThree = getRandomInt(3);

  while (
    randomOne === randomTwo ||
    randomOne === randomThree ||
    randomTwo === randomThree
  ) {
    randomTwo = getRandomInt(3);
    randomThree = getRandomInt(3);
  }
  const [a, setA] = useState(options[randomOne]);
  const [b, setB] = useState(options[randomTwo]);
  const [c, setC] = useState(options[randomThree]);
  
  const youAreCorrect = async () => {
    setPrompt(<p>You are correct </p>);
    setActive(false);
    props.correct();
    await axios.post("https://bet-backend.herokuapp.com/api/v1/userscore", {
      username: user.sub,
      score: "add"

    })

  };
  const youAreInCorrect = async () => {
    setPrompt(<p>You are Incorrect </p>);
    setActive(false);
    props.inCorrect();
    await axios.post("https://bet-backend.herokuapp.com/api/v1/userscore", {
      username: user.sub,
      score: "sub"

    })
  };

  let song = props.correctAnswer.artist.name;
  let correctAnswer = null;
  if (a === song) {
    correctAnswer = "a";
  }
  if (b === song) {
    correctAnswer = "b";
  }
  if (c === song) {
    correctAnswer = "c";
  }
  let InputA = (
    <span>
      <button
        class="btn btn-warning"
        onClick={
          correctAnswer === "a"
            ? () => youAreCorrect()
            : () => youAreInCorrect()
        }
      >
        {a}
      </button>
    </span>
  );
  let InputB = (
    <span>
      <button
        class="btn btn-warning"
        onClick={
          correctAnswer === "b"
            ? () => youAreCorrect()
            : () => youAreInCorrect()
        }
      >
        {b}
      </button>
    </span>
  );
  let InputC = (
    <span>
      <button
        class="btn btn-warning"
        onClick={
          correctAnswer === "c"
            ? () => youAreCorrect()
            : () => youAreInCorrect()
        }
      >
        {" "}
        {c}
      </button>
    </span>
  );

  return (
    <>
      <h4>Who is the Artist of this song?</h4>
      <When condition={active}>
        <ul>
          <li>{InputA}</li>
          <li>{InputB}</li>
          <li>{InputC}</li>
        </ul>
      </When>
      {prompt}
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  correct: () => dispatch(actions.addCorrect()),
  inCorrect: () => dispatch(actions.addInCorrect()),
});

export default connect(null, mapDispatchToProps)(Quiz);
