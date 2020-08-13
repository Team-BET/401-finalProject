import axios from "axios";

export const getTheSong = () => async (dispatch) => {
  let result = await axios.get("https://api.deezer.com/chart/");
  dispatch(getSong(result.data.result));
};

const getSong = (payload) => {
  return {
    type: "GET_SONG",
    payload,
  };
};
