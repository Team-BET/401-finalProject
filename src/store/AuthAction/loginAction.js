import axios from 'axios';

export const fetchUsers = () => async dispatch =>{
  let results = await axios.get('https://music-guessing-game.herokuapp.com/user')
          dispatch(getUsers(results.data))
}

const getUsers = (payload) => {
  return {
    type: 'GET_USERNAME',
    payload: payload,
  }
}