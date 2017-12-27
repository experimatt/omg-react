import { MAP_CENTER } from '../actions/action_types'

export const mapCenter = (state = {}, action) => {
  switch (action.type) {
    case MAP_CENTER.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default mapCenter;
