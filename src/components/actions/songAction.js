import axios from "axios";

export const getTheSong = () => async (dispatch) => {
  console.log('inside acgtion')
  let result = await axios.get("https://api.deezer.com/chart/");
  dispatch(getSong(result.data.tracks.data));
};

const getSong = (payload) => {
  return {
    type: "GET_SONG",
    payload,
  };
};

export  const addCorrect = () => {
  return {
    type: "ADD_TO_CORRECT",
    payload: null,
  }
}
export const addInCorrect = () => {
  return {
    type: "ADD_TO_INCORRECT",
    payload: null,
  }
}


export const updateScore = (payload) => {
  console.log('payload', payload)
  return {
    type: "UPDATE_SCORE",
    payload,
    
  }
}
