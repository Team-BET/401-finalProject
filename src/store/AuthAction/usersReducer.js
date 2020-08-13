const initState = {
  userLists: [],
}

const reducer = (state = initState, action) => {
  
  let newState = { ...state }

    switch(action.type){
      
      case 'GET_USERNAME':
        newState.userLists.push(action.payload)
        break;
    }

    return newState;
}

export default reducer;