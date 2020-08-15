import React, { useState } from "react";
import button from 'react'
import ReactHowler from 'react-howler'
import { useAuth0 } from '@auth0/auth0-react';

function OneSong(props) {
  const {isAuthenticated} = useAuth0();
  const [play, setPlay] = useState(false);
  console.log('play', play)

    return(
            isAuthenticated && (
          <div>
          <ReactHowler
            src={props.soundObj.preview}
            play={play} />
            <h1>{props.soundObj.title}</h1>
            <img alt= {props.soundObj.artist} src={props.soundObj.artist.picture_medium}/>
          <button key={props.index} onClick={ () => {
            console.log('playbefore', play)
            setPlay(true)
            console.log('playafter', play)
            }}>
          
            Play
          </button>

          <button key={props.index} onClick={ () => {
            console.log('playbefore p', play)
            setPlay(false)
            console.log('playbefore p', play)
            }}>

            Pause
          </button>
          </div>
            )
    )
  
}


export default OneSong;
