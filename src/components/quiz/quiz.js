import React, { useState } from "react";

function Quiz(props) {
  const [quiz, setQuiz] = useState();

  const randomQuiz = (n) => {};

  return (
    <div>
      <h1>Who is the Artist of this song?</h1>
      <form>
        <label>
          <input type="radio" value="option1" checked={true} />
          {props.name}
        </label>

        <label>
          <input type="radio" value="option1" checked={true} />
          {props.name}
        </label>

        <label>
          <input type="radio" value="option1" checked={true} />
          {props.name}
        </label>
      </form>

      <p></p>
    </div>
  );
}

export default Quiz;
