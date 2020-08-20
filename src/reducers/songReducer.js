const initState = {
  musicList: [],
  score:0
};

const reducer = (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "GET_SONG":
      newState.musicList = action.payload;
      break;
    case "ADD_TO_CORRECT":
      newState.score = parseInt(newState.score) + 1;
      console.log('newstate.score', newState.score)
      break;
      case "ADD_TO_INCORRECT":
        newState.score = parseInt(newState.score) - 1;
        break;
     case "UPDATE_SCORE":
       console.log('action', action.payload)
          newState.score = action.payload;
          break; 
    default:
      break;
  }

  return newState;
};

export default reducer;
