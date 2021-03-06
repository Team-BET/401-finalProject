import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ReactHowler from "react-howler";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Quiz from "../quiz/quiz.js";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    naxWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Song(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { music } = props;
  const [play, setPlay] = useState(false);
  const [counter, setConter] = useState(music[0]);
  const [wrongAnswerOne, setWrongAnswerOne] = useState(music[1]);
  const [wrongAnswerTwo, setWrongAnswerTwo] = useState(music[2]);

  let musicKeys = music;
  const randomInt = (max, min) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const randomMusic = () => {
    let res = randomInt(9, 0);
    if (musicKeys[res].title === counter.title) {
      return randomMusic();
    } else {
     
      setConter(musicKeys[res]);
      randomQuizAnswer(musicKeys[res]);
      return musicKeys[res];
    }
  };

  const randomQuizAnswer = (correct) => {
    
    let notCurrentMusic = musicKeys.filter(
      (song) => song.title !== correct.title
    );
    let res = notCurrentMusic.splice(randomInt(8, 0), 1)[0];
    
    let res2 =  notCurrentMusic.splice(randomInt(7, 0), 1)[0];
    
    setWrongAnswerOne(res);
    setWrongAnswerTwo(res2);
  };

  useEffect(() => {
    console.log("useEffect");
    randomMusic();
    
  }, []);

  return (
    
    <div class="row">
      <div class="col-sm-12 float-left">
        <div class="col-sm-8 float-left">
          <ReactHowler src={counter.preview} playing={play} />
          <h4 class="pictureTitle">{counter.title}</h4>
          <img
            class="mr-4 float-left"
            alt={counter.artist}
            src={counter.artist.picture_medium}
          />
          <Quiz
            class="float-left"
            key={counter.artist.name}
            correctAnswer={counter}
            wrongAnswerOne={wrongAnswerOne}
            wrongAnswerTwo={wrongAnswerTwo}
          />
        </div>
      </div>

      <div class="col-sm-12 ml-5">
        <PlayArrowIcon
          style={{ fontSize: 50 }}
          color="secondary"
          fontSize="large"
          onClick={() => {
            setPlay(true);
          }}
        ></PlayArrowIcon>

        <PauseCircleFilledIcon
          fontSize="large"
          color="secondary"
          style={{ fontSize: 50 }}
          onClick={() => {
            setPlay(false);
          }}
        ></PauseCircleFilledIcon>

        <SkipNextIcon
          style={{ fontSize: 50 }}
          fontSize="large"
          color="secondary"
          onClick={() => {
            randomMusic();
          }}
        ></SkipNextIcon>
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
