
import { FETCH_OFFERS_SUCCESS } from 'types'

import * as api from 'api'


export const createOffer = offer => api.createOffer(offer)


export const fetchSentOffers = userId => dispatch => {
  return api
    .fetchSentOffers(userId)
    .then(offers => {
      dispatch({type: FETCH_OFFERS_SUCCESS, offers, offersType: 'sent'})
      return offers
    })
}

export const fetchReceivedOffers = userId => dispatch => {
  return api
    .fetchReceivedOffers(userId)
    .then(offers => {
      dispatch({type: FETCH_OFFERS_SUCCESS, offers, offersType: 'received'})
      return offers
    })
}


