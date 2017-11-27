import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { stopInfo } from './stopInfo'
import { arrivals } from './arrivals'

const rootReducer = combineReducers({
  routing: routerReducer,
  stopInfo,
  arrivals,
})

export default rootReducer;
