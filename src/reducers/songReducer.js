const initState = {
  musicList: [],
  correctAnswers:0,
  inCorrectAnswers:0,
};

const reducer = (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "GET_SONG":
      newState.musicList = action.payload;
      break;
    case "ADD_TO_CORRECT":
      newState.correctAnswers = newState.correctAnswers + 1;
      break;
      case "ADD_TO_INCORRECT":
        newState.inCorrectAnswers = newState.inCorrectAnswers - 1;
        break;
    default:
      break;
  }

  return newState;
};

export default reducer;
