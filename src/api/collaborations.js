

import db from 'db'


export const createCollaboration = collab => 
  db.collection('collaborations')
    .add(collab)
    .then(docRef => docRef.id)

export const sendMessage = message => 
  db.collection('profiles')
    .doc(message.toUser)
    .collection('messages')
    .add(message)
