import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core"
import * as actions from "../../actions/songAction";

function Song(props) {
  const { getTheSong, music } = props;
  console.log('music', music)
  useEffect(() => {
    console.log('inside useEffect')
    getTheSong();
  }, [getTheSong]);

  let musicCollection = [];

  for (let i = 0; i < music.length; i++)
    musicCollection.push(<Button key={i} onClick={ () => {
        console.log('am here')
    }}>
    A Button.

   </Button>);

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
