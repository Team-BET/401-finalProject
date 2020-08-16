import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Song from "../getSong/song.js";


import SongWrapper from "../songWrapper/songWrapper.js"

function SongLoading(props) {
  const {  isAuthenticated} = useAuth0();
  
  if (isAuthenticated) {
    return UserGreeting() ;
  }
  return GuestGreeting();
}
function UserGreeting(props) {
  return (
    <div>
      <SongWrapper>
         <Song />
      </SongWrapper>
      {/* <button
        class="btn btn-outline-secondary  btn-lg btn-block"
      >
        Play
      </button> */}
    </div>
  );
}

function GuestGreeting(props) {
  const { loginWithRedirect} = useAuth0();
  return (
    <div>
      <h1>Please sign up.</h1>
      <button class="btn-outline-danger" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </div>
  );
}



export default SongLoading;
