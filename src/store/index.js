
import { createStore, combineReducers } from 'redux'
import servicesReducer from 'reducers'


const addLoggerToDispatch = store => nextDispatch => action => {
  console.group(action.type)
  console.log('%c prev state', 'color: gray', store.getState())
  console.log('%c action', 'color: blue', action)
  const returnValue = nextDispatch(action)
  console.log('%c next state', 'color: green', store.getState())
  console.groupEnd(action.type)
  return returnValue
}
  


const addPromiseToDispatch = store => nextDispatch => action => {
  if (typeof action.then === 'function') {
    return action.then(nextDispatch)
  }

  return nextDispatch(action)
}
  


const applyMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware => {
    store.dispatch = middleware(store)(store.dispatch)
  })
}


const initStore = () => {
  const middlewares = [addPromiseToDispatch]
  const serviceApp = combineReducers({
    service: servicesReducer
  })

  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(serviceApp, browserSupport)

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(addLoggerToDispatch)
  }

  applyMiddlewares(store, middlewares)

  return store
}

export default initStore






