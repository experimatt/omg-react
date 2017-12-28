import { MAP_CENTER, GEOLOCATION} from '../actions/action_types'

export const mapCenter = (state = {}, action) => {
  switch (action.type) {
    case MAP_CENTER.SUCCESS:
      return action.payload
    case GEOLOCATION.SUCCESS:
      return {}
    default:
      return state
  }
}

export default mapCenter;
