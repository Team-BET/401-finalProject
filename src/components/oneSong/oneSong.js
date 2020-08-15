import React, { useState } from "react";
import button from 'react'
import ReactHowler from 'react-howler'

function OneSong(props) {
  const [play, setPlay] = useState(false);
  
    return(
      
          <div>
          <ReactHowler
            src={props.soundObj.preview}
            play={play} />
            <h1>{props.soundObj.title}</h1>
            <img alt= {props.soundObj.artist} src={props.soundObj.artist.picture_medium}/>

          <button key={props.index} onClick={ () => {
            setPlay(true)
            }}>       
            Play
          </button>

          <button key={props.index} onClick={ () => {
            setPlay(false)
            }}>
            Pause
          </button>
          </div>
            )

  
}


export default OneSong;
