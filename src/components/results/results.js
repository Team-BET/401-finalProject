import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
 console.log('result', props)
 
  return(
    <div>
      <p>Results: {props.correctAnswers - props.inCorrectAnswers}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    correctAnswers: state.musicData.correctAnswers,
    inCorrectAnswers:state.musicData.inCorrectAnswers
  };
};

export default connect(mapStateToProps, null)(Results);