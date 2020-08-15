import React, { useState } from "react";
import { connect } from "react-redux";
import ReactHowler from 'react-howler'

function Song(props) {
  const { music } = props;
  const [play, setPlay] = useState(false);
  const [counter, setConter] = useState(0)
 
  let musicKeys = music;
  console.log('musickeys', musicKeys)
  let soundObj = musicKeys[counter]
  console.log('sound', soundObj)
  
  const randomMusic = () => {
   let res =  Math.ceil(Math.random() * 9)
    if(res === counter){
     return randomMusic()
    } else {
     setConter(res)
     return res;  
    }
  }
   
    return(
      <div>
        <ReactHowler
            src={soundObj.preview}
            playing={play} />
            <h1>{soundObj.title}</h1>
            <img alt= {soundObj.artist} src={soundObj.artist.picture_medium}/>
              
          <button  onClick={ () => {
            setPlay(true)
            }}>       
            Play
          </button> 


          <button onClick={ () => {
            setPlay(false)
            }}>
            Pause
          </button>
          <button onClick={ () => {
            setConter(randomMusic())
            }}>
            Next
          </button>
      </div>
     
    )
  // })

  // return musicMap;
    
  
}

const mapStateToProps = (state) => {
  return {
    music: state.musicData.musicList,
  };
};

export default connect(mapStateToProps, null)(Song);
