import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { stopInfo } from './stop_info'
import { arrivals } from './arrivals'
import { geolocation } from './geolocation'
import { nearbyStops } from './nearby_stops'
import { favorites } from './favorites'

const rootReducer = combineReducers({
  routing: routerReducer,
  stopInfo,
  arrivals,
  geolocation,
  nearbyStops,
  favorites
})

export default rootReducer;
