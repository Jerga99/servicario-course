
import { SET_AUTH_USER, 
         RESET_AUTH_STATE,
         FETCH_USER_SERVICES_SUCCESS,
         FETCH_USER_MESSAGES_SUCCESS } from 'types'
import { combineReducers } from 'redux'

const INITIAL_USER_STATE = {
  messages: [],
  services: []
}

const initAuth = () => {
  const user = (state = INITIAL_USER_STATE, action) => {
    switch(action.type) {
      case SET_AUTH_USER:
        return {...action.user, services: [], messages: []}
      case FETCH_USER_SERVICES_SUCCESS:
      debugger
        return { ...state, services: action.services }
      case FETCH_USER_MESSAGES_SUCCESS:
        return { ...state, messages: action.messages }
      default:
        return state
    }
  }
  const isAuth = (state = false, action) => {
    switch(action.type) {
      case SET_AUTH_USER:
        return !!action.user
      default:
        return state
    }
  } 
  const isAuthResolved = (state = false, action) => {
    switch(action.type) {
      case SET_AUTH_USER:
        return true
      case RESET_AUTH_STATE:
        return false
      default:
        return state
    }
  }

  return combineReducers({
    user,
    isAuth,
    isAuthResolved
  })
}

const auth = initAuth()
export default auth











