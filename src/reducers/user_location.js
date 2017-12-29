import { USER_LOCATION } from '../actions/action_types'

const initialState = { coords: {} }

export const userLocation = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOCATION.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default userLocation;
