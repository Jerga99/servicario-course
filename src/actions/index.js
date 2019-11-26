
import { 
  FETCH_SERVICES_SUCCESS, 
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICE } from 'types'

import * as api from 'api'

export const requestService = () => (
  {
    type: REQUEST_SERVICE
  }
)

export const resetPreviousService = () => (
  {
    type: FETCH_SERVICE_SUCCESS,
    service: {}
  }
)

export const fetchServices = () => 
   api
    .fetchServices()
    .then(services => (
      {
        type: FETCH_SERVICES_SUCCESS,
        services
      }
    )
  )


export const fetchServiceById = serviceId => 
   api
    .fetchServiceById(serviceId)
    .then(service => (
      {
        type: FETCH_SERVICE_SUCCESS,
        service
      }
    )
  )









