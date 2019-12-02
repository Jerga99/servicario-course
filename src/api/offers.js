

import db from 'db'
import { createRef } from './index'


export const createOffer = offer => db.collection('offers').add(offer)



export const fetchSentOffers = userId => {
  const userRef = createRef('profiles', userId)
  return db
    .collection('offers')
    .where('fromUser', '==', userRef)
    .get()
    .then(snapshot => snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
}


export const fetchReceivedOffers = userId => {
  const userRef = createRef('profiles', userId)
  return db
    .collection('offers')
    .where('toUser', '==', userRef)
    .get()
    .then(snapshot => snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
}