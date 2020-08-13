import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/songAction";

function Song(props) {
  const { getTheSong } = props;

  useEffect(() => {
    getTheSong();
  }, [getTheSong]);

  let musicCollection = [];

  for (let i = 0; i < props.music.length; i++)
    musicCollection.push(props.music[i]);

  console.log(musicCollection);
  return <>{musicCollection}</>;
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
