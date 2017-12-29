import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { stopInfo } from './stop_info'
import { arrivals } from './arrivals'
import { userLocation } from './user_location'
import { nearbyStops } from './nearby_stops'
import { favorites } from './favorites'
import { mapCenter } from './map_center'

const rootReducer = combineReducers({
  routing: routerReducer,
  stopInfo,
  arrivals,
  userLocation,
  nearbyStops,
  favorites,
  mapCenter
})

export default rootReducer;
