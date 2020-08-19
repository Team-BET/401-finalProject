import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const Results = (props) => {
  const { isAuthenticated, user } = useAuth0();
  console.log("result", props);
  console.log('props.myUser', user)



 
  async function makeGetRequest () {
    let res = await axios.get("https://bet-backend.herokuapp.com/api/v1/users")
  }
  makeGetRequest()
  
  return (
    isAuthenticated &&(
    <div>
      <p>Results: {props.correctAnswers - props.inCorrectAnswers}</p>
      <Link class="btn btn-danger btn-lg" to="/Songloading">
        Back To Game
      </Link>
    </div>
  )
  )
};

const mapStateToProps = (state) => {
  return {
    correctAnswers: state.musicData.correctAnswers,
    inCorrectAnswers: state.musicData.inCorrectAnswers,
  };
};

export default connect(mapStateToProps, null)(Results);
