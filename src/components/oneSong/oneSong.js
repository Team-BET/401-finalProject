import React, { useState } from "react";
import ReactHowler from "react-howler";
import { Button } from "react-bootstrap";

function OneSong(props) {
  const [play, setPlay] = useState(false);

  return (
    <div class="row">
      <ReactHowler src={props.soundObj.preview} playing={play} />
      <div class="col-sm">
        <h1>{props.soundObj.title}</h1>
        <img
          alt={props.soundObj.artist}
          src={props.soundObj.artist.picture_medium}
        />
      </div>
      <div class="col-sm">
        <button
          class="btn btn-outline-danger"
          key={props.index}
          onClick={() => {
            setPlay(true);
          }}
        >
          Play
        </button>
        <button
          class="btn btn-outline-danger"
          key={props.index}
          onClick={() => {
            setPlay(false);
          }}
        >
          Pause
        </button>
      </div>
    </div>
  );
}

export default OneSong;
