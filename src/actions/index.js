
import { FETCH_SERVICES_SUCCESS } from 'types'

import db from 'db'

export const fetchServices = () => {
  return db
    .collection('services')
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => doc.data())
      return {
        type: FETCH_SERVICES_SUCCESS,
        services
      }
    })
}








