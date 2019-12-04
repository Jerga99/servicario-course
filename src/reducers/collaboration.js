

import { combineReducers } from 'redux'
import { 
  SET_COLLABORATION,
  SET_COLLABORATION_JOINED_PEOPLE } from 'types'


const initCollab = () => {


  const collaboration = (state = {}, action) => {
    switch(action.type) {
      case SET_COLLABORATION:
        return action.collaboration
      default:
        return state
    }
  }

  const joinedPeople = (state = [], action) => {
    switch(action.type) {
      case SET_COLLABORATION_JOINED_PEOPLE:
        return action.joinedPeople
      default:
        return state
    }
  }

  const messages = (state = [], action) => {
    switch(action.type) {

      default:
        return state
    }
  }

  return combineReducers({
    joined: collaboration,
    joinedPeople,
    messages
  })
}


const collaboration = initCollab()
export default collaboration









