
import { combineReducers } from 'redux'
import services from './services'
import selectedService from './selectedService'
import auth from './auth'
import offers from './offers'

const serviceApp = combineReducers({
  services,
  selectedService,
  auth,
  offers
})


export default serviceApp