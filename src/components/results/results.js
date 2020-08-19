import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const Results = (props) => {
  console.log("result", props);

  return (
    <div>
      <p>Results: {props.correctAnswers - props.inCorrectAnswers}</p>
      <Link class="btn btn-danger btn-lg" to="/Songloading">
        Back To Game
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    correctAnswers: state.musicData.correctAnswers,
    inCorrectAnswers: state.musicData.inCorrectAnswers,
  };
};

export default connect(mapStateToProps, null)(Results);
