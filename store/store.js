import axios from 'axios'

const initialState = {}

const TOKEN ='token'

const SET_AUTH = 'SET_AUTH'

const setAuth = auth =>({
  type: SET_AUTH,
  auth
})

export function TokenThunk () {
  async (dispatch) =>{
    try{
      console.log('tokenThunk')
    const token = window.localStorage.getItem(TOKEN)
    if (token) {
      const response = await axios.get('/auth/me', {
        headers: {
          authorization: token
        }
      })
      return dispatch(setAuth(response.data))
    }
  }
  catch(err){console.log(err)}
}}

export const authenticate = (username, password, method) =>{
  async (dispatch) => {
  try {
    console.log('authenticated')
    const response = await axios.post(`/auth/${method}`, {username, password})
    window.localStorage.setItem(TOKEN, response.data.token)
    dispatch(TokenThunk())}
  catch(err){console.log(err)}
}}

export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  history.push('/login')
  return {
    type: SET_AUTH,
    auth: {}
  }
}



export default function(state = initialState, action){
  switch(action.type){
    case SET_AUTH:
      return action.auth
    default:
      return state
  }
}
