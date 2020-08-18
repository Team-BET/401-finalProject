import React, { useState } from "react";
import { RadioGroup, RadioButton } from "react-radio-buttons";

function Quiz(props) {
  const [quiz, setQuiz] = useState(false);
  const randomQuiz = (n) => {};

  const correct = (props) => {
    setQuiz(true);
    alert("correct answer");
  };

  return (
    <>
      <h4>Who is the Artist of this song?</h4>
      <form>
        <input type="radio" value="option1" checked={quiz} />
        {props.name}
        <input type="radio" value={correct} checked={correct} />
        {props.name}
        <input type="radio" value="option1" checked={quiz} />
        {props.name}
      </form>
      <p></p>
    </>
  );
}

export default Quiz;
