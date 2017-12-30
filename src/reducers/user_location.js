import { USER_LOCATION } from '../actions/action_types'

// const initialState = { coords: {} }

export const userLocation = (state = {}, action) => {

  switch (action.type) {
    case USER_LOCATION.SUCCESS:
      return {
        coords: {
          latitute: action.payload.coords.latitude,
          longitude: action.payload.coords.longitude
        },
        timestamp: action.payload.timestamp
      }
    default:
      return state
  }
}

export default userLocation;
