import axios from "axios";

export const getTheSong = () => async (dispatch) => {
  console.log('inside acgtion')
  let result = await axios.get("https://api.deezer.com/chart/");
  console.log('result', result)
  dispatch(getSong(result.data));
};

const getSong = (payload) => {
  console.log('payload', payload)
  return {
    type: "GET_SONG",
    payload,
  };
};