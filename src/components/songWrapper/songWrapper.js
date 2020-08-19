import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import * as actions from "../actions/songAction.js";
import Spinner from 'react-bootstrap/Spinner';


const SongWrapper = (props) => {
  const { getTheSong, music, children } = props

  useEffect(() => {
  getTheSong();
  }, [getTheSong]);

  let whatToRender = <Spinner animation="border" variant="danger" />
  if(music.length > 0){
    whatToRender = children
  }

  return(
    <div>
      {whatToRender}
    </div>

  )
}
const mapStateToProps = (state) => {
  return {
    music: state.musicData.musicList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTheSong: (data) => dispatch(actions.getTheSong(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SongWrapper)