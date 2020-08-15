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