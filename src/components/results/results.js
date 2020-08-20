import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const Results = (props) => {
  const { isAuthenticated, user } = useAuth0();
  const [userScore, setUserScore] = useState(0);
  console.log('props.myUser', user)
  const userResult = parseInt(props.score);
  console.log('props.sparseInt(score)', parseInt(props.score))


 
  async function makeGetRequest () {
    let res = await axios.get("https://bet-backend.herokuapp.com/api/v1/users")
    console.log('res', res.data[0].score)
    setUserScore(res.data[0].score)
    }

  useEffect( () => {
      makeGetRequest()
  }, [userScore])
  
  console.log('userScore', userScore)
  return (
    isAuthenticated &&(
    <div class="result_color">
      <p>Results: {user.name} :{userResult}</p>
      <Link class="btn btn-danger btn-lg" to="/Songloading">
        Back To Game
      </Link>
    </div>
  )
  )
};

const mapStateToProps = (state) => {
  return {
    score: state.musicData.score,
    
  };
};

export default connect(mapStateToProps, null)(Results);
