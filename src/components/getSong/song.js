import React, { useState } from "react";
import { connect } from "react-redux";
import ReactHowler from "react-howler";
import Quiz from "../quiz/quiz.js";

function Song(props) {
  const { music } = props;
  const [play, setPlay] = useState(false);
  const [counter, setConter] = useState(0);
  const [wrongAnswerOne, setWrongAnswerOne] = useState();
  const [wrongAnswerTwo, setWrongAnswerTwo] = useState();

  let musicKeys = music;
  let soundObj = musicKeys[counter];

  const randomMusic = () => {
    let res = Math.ceil(Math.random() * 9);
    if (res === counter) {
      return randomMusic();
    } else {
      setConter(res);
      return res;
    }
  };

  const randomQuizAnswer = () => {
    let res = Math.ceil(Math.random() * 9);
    if (
      counter === wrongAnswerOne ||
      counter === wrongAnswerTwo ||
      wrongAnswerOne === wrongAnswerTwo
    ) {
      return randomQuizAnswer();
    } else {
      setWrongAnswerOne(res);
      return res;
    }
  };

  return (
    <div class="row">
      <div class="col-sm-12 float-left">
        <div class="col-sm-8 float-left">
          <ReactHowler src={soundObj.preview} playing={play} />
          <h1>{soundObj.title}</h1>
          <img
            class="mr-4 float-left"
            alt={soundObj.artist}
            src={soundObj.artist.picture_medium}
          />
          <Quiz class="float-left" name={soundObj.artist.name} />
        </div>
      </div>

      <div class="col-sm-12 ml-5">
        <button
          class="btn btn-outline-danger"
          onClick={() => {
            setPlay(true);
          }}
        >
          Play
        </button>

        <button
          class="btn btn-outline-danger"
          onClick={() => {
            setPlay(false);
          }}
        >
          Pause
        </button>
        <button
          class="btn btn-outline-danger"
          onClick={() => {
            setConter(randomMusic());
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    music: state.musicData.musicList,
  };
};

export default connect(mapStateToProps, null)(Song);
