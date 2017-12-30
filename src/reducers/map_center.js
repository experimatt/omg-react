import { MAP_CENTER } from '../actions/action_types'

const initialState = { latitude: 44.975918, longitude: -93.273079 }

export const mapCenter = (state = initialState, action) => {
  switch (action.type) {
    case MAP_CENTER.SUCCESS:
      return action.payload
    // case USER_LOCATION.SUCCESS:
    //   return {}
    default:
      return state
  }
}

export default mapCenter;
