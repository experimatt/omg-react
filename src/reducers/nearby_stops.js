import { NEARBY_STOPS } from '../actions/action_types'

export const nearbyStops = (state = [], action) => {
  switch (action.type) {
    case NEARBY_STOPS.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default nearbyStops;
