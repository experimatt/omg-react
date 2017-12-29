import { MAP_CENTER, USER_LOCATION} from '../actions/action_types'

export const mapCenter = (state = {}, action) => {
  switch (action.type) {
    case MAP_CENTER.SUCCESS:
      return action.payload
    case USER_LOCATION.SUCCESS:
      return {}
    default:
      return state
  }
}

export default mapCenter;
