import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Authentication/logInButton";
import Song from "./components/getSong/song";

function Stuff(props) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  //const [play, setPlay] = useState(false);

  if (isAuthenticated) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function UserGreeting(props) {
  return (
    <div>
      <Song />
      <button
        class="btn btn-outline-secondary  btn-lg btn-block"
        // I will
      >
        Play
      </button>
    </div>
  );
}

function GuestGreeting(props) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div>
      <h1>Please sign up.</h1>
      <button class="btn-outline-danger" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </div>
  );
}

export default Stuff;
