import { ARRIVALS } from '../actions/action_types'

export const arrivals = (state = {}, action) => {
  switch (action.type) {
    case ARRIVALS.SUCCESS:
      return {...state, [action.payload.stopId]: action.payload.data}
    default:
      return state
  }
}

export default arrivals;
