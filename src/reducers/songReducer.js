const initState = {
  musicList: [],
};

const reducer = (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "GET_SONG":
      newState.getSong = action.payload;
      break;
    default:
      break;
  }

  return newState;
};

export default reducer;
