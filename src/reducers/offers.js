
import { combineReducers } from 'redux'




const createOfferList = offersType => {

  return (state = [], action) => {

    if (action.offersType !== offersType) {
      return state
    }

    switch(action.type) {
      case 'FETCH_OFFERS_SUCCESS':
        return action.offers
    }

    return state
  }
}


const offers = combineReducers({
  received: createOfferList('received'),
  sent: createOfferList('sent'),
})

export default offers
