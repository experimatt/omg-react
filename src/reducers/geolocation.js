import { GEOLOCATION } from '../actions/action_types'

export const geolocation = (state = {}, action) => {
  switch (action.type) {
    case GEOLOCATION.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default geolocation;
