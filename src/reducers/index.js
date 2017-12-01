import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { stopInfo } from './stop_info'
import { arrivals } from './arrivals'

const rootReducer = combineReducers({
  routing: routerReducer,
  stopInfo,
  arrivals
})

export default rootReducer;
