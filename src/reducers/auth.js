
import { SET_AUTH_USER, 
         RESET_AUTH_STATE,
         FETCH_USER_SERVICES_SUCCESS,
         FETCH_USER_MESSAGES_SUCCESS,
         MARK_MESSAGE_AS_READ } from 'types'


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
    case FETCH_USER_MESSAGES_SUCCESS:
      return { ...state, user: {...state.user, messages: action.messages}}
    case MARK_MESSAGE_AS_READ:
      const newMessages = state.user.messages.map(message => {
        if (message.id === action.messageId) {
          message.isRead = true
        }

        return message
      })

      return {...state, user: {...state.user, messages: newMessages}}
    default:
      return state
  }
}

export default auth