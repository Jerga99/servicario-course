
import { combineReducers } from 'redux'
import services from './services'
import selectedService from './selectedService'
import auth from './auth'
import user from './user'

const serviceApp = combineReducers({
  services,
  selectedService,
  auth,
  user
})


export default serviceApp