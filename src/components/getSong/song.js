import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core"
import * as actions from "../actions/songAction.js";
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';




function Song(props) {
  const { getTheSong, music } = props;
  console.log('music', music)

  useEffect(() => {
    console.log('inside useEffect')
    getTheSong();
  }, [getTheSong]);

  let musicCollection = [];

  let musicKeys = music?.tracks?.data || [];
  


  for (let i = 0; i < musicKeys.length; i++){
    console.log('musicKeys', musicKeys[i].preview)

    musicCollection.push(<Button key={i} onClick={ () =>(musicKeys[i].preview)}>
      Play 
   </Button>);
  }
    console.log(musicCollection)
  return (
  <>{musicCollection}</>
  );
}





const mapStateToProps = (state) => {
  return {
    music: state.musicData.musicList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTheSong: (data) => dispatch(actions.getTheSong(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Song);
