import { STOP_INFO } from '../actions/action_types.js'

export const stopInfo = (state = {}, action) => {
  switch (action.type) {
    case STOP_INFO.SUCCESS:
      return {...state, [action.payload.stop_id]: action.payload}
    default:
      return state
  }
}

export default stopInfo;
