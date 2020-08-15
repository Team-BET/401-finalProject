import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/songAction.js";
import OneSong from '../oneSong/oneSong.js';
import { useAuth0 } from '@auth0/auth0-react';

function Song(props) {
  const {isAuthenticated} = useAuth0();
  const { getTheSong, music } = props;
 

  useEffect(() => {
    getTheSong();
  }, [getTheSong]);
  
  let musicKeys = music?.tracks?.data || [];
  
  return musicKeys.map((soundObj, index)=>{
    return(
      <div>
        <OneSong key={index} soundObj={soundObj}/>
      </div>
     
    )
  })
  
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
