

import { combineReducers } from 'redux'
import { 
  SET_COLLABORATION,
  SET_COLLABORATION_JOINED_PEOPLE,
  UPDATE_COLLABORATION_USER } from 'types'


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
      case UPDATE_COLLABORATION_USER:
        const newJoinedPeople = [...state]
        const { user } = action
        const index = newJoinedPeople.findIndex(jp => jp.uid === user.uid)

        if (index < 0) { return state }
        if (newJoinedPeople[index].state === user.state) { return state }

        newJoinedPeople[index].state = user.state
        return newJoinedPeople
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









