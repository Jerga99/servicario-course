
import { SET_AUTH_USER } from 'types'


const INITIAL_STATE = {
  user: null,
  isAuth: false,
  isAuthResolved: false
}

const auth = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_AUTH_USER:
      return { user: action.user, isAuthResolved: true, isAuth: !!action.user}
    default:
      return state
  }
}

export default auth