
import { SET_AUTH_USER, 
         RESET_AUTH_STATE,
         FETCH_USER_SERVICES_SUCCESS } from 'types'


const INITIAL_STATE = {
  user: null,
  isAuth: false,
  isAuthResolved: false
}

const auth = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_AUTH_USER:
      return { user: action.user, isAuthResolved: true, isAuth: !!action.user}
    case RESET_AUTH_STATE:
      return { ...state, isAuthResolved: false}
    case FETCH_USER_SERVICES_SUCCESS:
      return { ...state, user: {...state.user, services: action.services}}
    default:
      return state
  }
}

export default auth