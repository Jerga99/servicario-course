

import { 
  COLLABORATION_CREATED_FROM_OFFER, 
  FETCH_USER_MESSAGES_SUCCESS } from 'types'
import * as api from 'api'

export const collaborate = ({collaboration, message}) => dispatch =>
  api.createCollaboration(collaboration)
    .then(collabId => {
      message.cta = `/collaborations/${collabId}`
      api.sendMessage(message)
      api.markOfferAsInCollaboration(collaboration.fromOffer)
      dispatch({
        type: COLLABORATION_CREATED_FROM_OFFER,
        offerId: collaboration.fromOffer,
        offersType: 'sent'
      })
      return collabId
    })


export const subscribeToMessages = userId => dispatch =>
  api.subscribeToMessages(userId, 
    messages => dispatch({type: FETCH_USER_MESSAGES_SUCCESS, messages}))


// export const markMessageAsRead = message => dispatch =>
//   api.markMessageAsRead(message)
//      .then(_ => dispatch({type: MARK_MESSAGE_AS_READ, messageId: message.id}))

export const markMessageAsRead = message => api.markMessageAsRead(message)

export const fetchCollaborations = userId => api.fetchCollaborations(userId)












