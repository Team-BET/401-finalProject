import React, { button } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Redirect } from "react-router-dom";

const Home = (props) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return HomePlayButton();
  } else {
    return (
      <div>
        <h2>HELLO</h2>
        <p>
          Can you guess the artist? This quiz is unique and fun because it
          involves a series of popular song lyrics, and you have to imagine who
          sung the song. For someone who is a fan of music, this may be a total
          breeze. Those who are not as familiar with music can learn something.
          To paly the game you need to sign up first.
        </p>

        <p>Good Luck!</p>
      </div>
    );
  }
};

const HomePlayButton = (props) => {
  return (
    <div>
      <p>
        sung the song. For someone who is a fan of music, this may be a total
        breeze. Those who are not as familiar with music can learn something. To
        paly the game you need to sign up first.
      </p>
      <Link class="btn btn-outline-danger" to="/Songloading">
        Play
      </Link>
    </div>
  );
};

export default Home;
