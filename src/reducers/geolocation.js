import { GEOLOCATION } from '../actions/action_types'

const initialState = {
  isLoading: true
}

export const geolocation = (state = initialState, action) => {
  switch (action.type) {
    case GEOLOCATION.SUCCESS:
      return {
        ...state,
        isLoading: false,
        coords: action.payload.coords,
        timestamp: action.payload.timestamp
      }
    default:
      return state
  }
}

export default geolocation;
