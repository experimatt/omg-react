import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { stopInfo } from './stop_info'
import { arrivals } from './arrivals'
import { geolocation } from './geolocation'

const rootReducer = combineReducers({
  routing: routerReducer,
  stopInfo,
  arrivals,
  geolocation
})

export default rootReducer;
