
import { combineReducers } from 'redux'
import services from './services'
import selectedService from './selectedService'
import auth from './auth'

const serviceApp = combineReducers({
  services,
  selectedService,
  auth
})


export default serviceApp