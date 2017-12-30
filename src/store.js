import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'
import _throttle from 'lodash/throttle'

export const history = createHistory()

// use persisted state from local storage if present
const initialState = loadState() || {}

const middleware = applyMiddleware(
  thunk,
  routerMiddleware(history)
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(middleware)
)

// persist state to local storage
store.subscribe(_throttle(() => {
  saveState({
    // TODO: This isn't working correctly yet. fix it
    // userLocation: store.getState().userLocation,
    favorites: store.getState().favorites
  })
}, 1000))

export default store
