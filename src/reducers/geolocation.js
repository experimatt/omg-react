import { GEOLOCATION } from '../actions/action_types'

const initialState = {
  isLoading: true,
  coords: { latitude: 44.975918, longitude: -93.273079 }
}

export const geolocation = (state = initialState, action) => {
  switch (action.type) {
    case GEOLOCATION.SUCCESS:
      console.log(typeof action.payload.coords);
      console.log(action.payload.coords);
      return {
        isLoading: false,
        coords: action.payload.coords,
        timestamp: action.payload.timestamp
      }
    default:
      return state
  }
}

export default geolocation;
