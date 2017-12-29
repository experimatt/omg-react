import { USER_LOCATION } from '../actions/action_types'

const initialState = {
  isLoading: true,
  coords: { latitude: 44.975918, longitude: -93.273079 }
}
 
export const userLocation = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOCATION.SUCCESS:
      return {
        isLoading: false,
        coords: action.payload.coords,
        timestamp: action.payload.timestamp
      }
    default:
      return state
  }
}

export default userLocation;
