import { USER_LOCATION } from '../actions/action_types'

const initialState = { coords: {latitude: 44.975918, longitude: -93.273079} }

export const userLocation = (state = initialState, action) => {

  switch (action.type) {
    case USER_LOCATION.SUCCESS:
      return {
        coords: {
          latitude: action.payload.coords.latitude,
          longitude: action.payload.coords.longitude
        },
        timestamp: action.payload.timestamp
      }

    default:
      return state
  }
}

export default userLocation;
