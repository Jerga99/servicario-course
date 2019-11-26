
import { combineReducers } from 'redux'
import services from './services'
import selectedService from './selectedService'

const serviceApp = combineReducers({
  services,
  selectedService
})


export default serviceApp