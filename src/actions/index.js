
import { 
  FETCH_SERVICES_SUCCESS, 
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICE } from 'types'

import * as api from 'api'

export const fetchServices = () => dispatch =>
   api
    .fetchServices()
    .then(services => dispatch(
      {
        type: FETCH_SERVICES_SUCCESS,
        services
      }
    )
  )


export const fetchServiceById = serviceId => (dispatch, getState) => {
  const lastService = getState().selectedService.item
  if (lastService.id && lastService.id === serviceId) { return Promise.resolve() }

  dispatch({type: REQUEST_SERVICE})
  return api
    .fetchServiceById(serviceId)
    .then(service => dispatch(
      {
        type: FETCH_SERVICE_SUCCESS,
        service
      }
    )
  )
}

export const register = (registerFormData) => dispatch => {
  return api
    .register({...registerFormData})
    .then(_ => {
      return true
    }, errorMessage => Promise.reject(errorMessage))
}














