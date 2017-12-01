import { STOP_INFO } from '../actions/action_types.js'

export const stopInfo = (state = {}, action) => {
  switch (action.type) {
    case STOP_INFO.SUCCESS:
      return {...state, [action.payload.stopId]: action.payload.data}
    default:
      return state
  }
}

export default stopInfo;
