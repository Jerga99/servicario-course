

import db from 'db'


export const createOffer = offer => db.collection('offers').add(offer)