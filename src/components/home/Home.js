import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../actions/songAction.js";



const Home = (props) => {
  const { isAuthenticated , user} = useAuth0();
  const {updateScore} =props
  
  

  useEffect(() => {
    
    const getUserFunction = async() => {
      if (user) {
      let musicUser = await axios.get("https://bet-backend.herokuapp.com/api/v1/users", {
     
        username: user.sub
    
        })
        if(musicUser.data.length > 0){
          console.log('musicUser', musicUser.data[0])
         
          updateScore(musicUser.data[0].score)

        }else if(musicUser.data.length === 0) {
          await axios.post("https://bet-backend.herokuapp.com/api/v1/users", {
            username : user.sub,
            score: 0
          })
      
          

        }
      }
    } 
   
    getUserFunction()
  }, [user, updateScore])    

 



    if(isAuthenticated){
    return HomePlayButton();
  } else {
    return (
      <div class="home-page">
        <h2 class="hello">HELLO!</h2>
        <p class="home_p">
          Can you guess the artist? This quiz is unique and fun because it
          involves
          <br /> a series of popular song lyrics, and you have to imagine who
          sung the song. <br />
          For someone who is a fan of music, this may be a total breeze. <br />
          Those who are not as familiar with music can learn something. <br />{" "}
          To paly the game you need to sign up first.
        </p>

        <p class="good_luck">Good Luck!</p>
      </div>
    );
  }
};

const HomePlayButton = (props) => {
  return (
    <div>
      <h3>Please press the paly button to start the game</h3>

      <Link class="btn btn-danger btn-lg" to="/Songloading">
        Play
      </Link>
    </div>
  );
};




const mapDispatchToProps = (dispatch) => ({
  updateScore: (data) => dispatch(actions.updateScore(data)),
 
});

export default connect(null, mapDispatchToProps)(Home);



