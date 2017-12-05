import { STOP_DISTANCES } from '../actions/action_types'

export const stopDistances = (state = [], action) => {
  switch (action.type) {
    case STOP_DISTANCES.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default stopDistances;
