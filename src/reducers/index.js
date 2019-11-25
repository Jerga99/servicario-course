
import { FETCH_SERVICES } from 'types'


const INITIAL_STATE = {
  items: []
}


const servicesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_SERVICES:
      return {...state, items: action.services}
    default:
      return state
  }
}

export default servicesReducer