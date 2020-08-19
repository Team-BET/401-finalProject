import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import ReactHowler from "react-howler";
import Quiz from "../quiz/quiz.js";

function Song(props) {
  const { music } = props;
  const [play, setPlay] = useState(false);
  const [counter, setConter] = useState(music[0]);
  const [wrongAnswerOne, setWrongAnswerOne] = useState(music[1]);
  const [wrongAnswerTwo, setWrongAnswerTwo] = useState(music[2]);

  let musicKeys = music;
  const randomInt = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
    }

  const randomMusic = () => {
    let res = randomInt(9, 0);
    if (musicKeys[res].title === counter.title ) {
      return randomMusic();
    } else {
      console.log("20-21")
      setConter(musicKeys[res]);
      return musicKeys[res];
    }
  };

 
  const randomQuizAnswer = () => {
    console.log('musickeysin rand', musicKeys)
    let notCurrentMusic = musicKeys.filter(song => song.title !== counter.title )
    console.log('notCurrent', notCurrentMusic)
    let res = notCurrentMusic.splice(randomInt(8,0), 1);
    console.log('notCurrent22', notCurrentMusic)
    console.log('splice', res)
    let res2 = notCurrentMusic.splice(randomInt(7,0), 1);
    console.log('splice2', res2)
    console.log('current', notCurrentMusic)
    setWrongAnswerOne(res[0]);
    setWrongAnswerTwo(res2[0]);


  };

  useEffect(() => {
    console.log('useEffect')
    randomQuizAnswer()
  },[])

  return (
    <div class="row">
      <div class="col-sm-12 float-left">
        <div class="col-sm-8 float-left">
          <ReactHowler src={counter.preview} playing={play} />
          <h1>{counter.title}</h1>
          <img
            class="mr-4 float-left"
            alt={counter.artist}
            src={counter.artist.picture_medium}
          />
          <Quiz class="float-left" key={counter.artist.name} correctAnswer={counter} wrongAnswerOne={wrongAnswerOne} wrongAnswerTwo={wrongAnswerTwo}/>
        </div>
      </div>

      <div class="col-sm-12 ml-5">
        <button
          class="btn btn-warning"
          onClick={() => {
            setPlay(true);
          }}
        >
          Play
        </button>

        <button
          class="btn btn-warning"
          onClick={() => {
            setPlay(false);
          }}
        >
          Pause
        </button>
        <button
          class="btn btn-warning"
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
