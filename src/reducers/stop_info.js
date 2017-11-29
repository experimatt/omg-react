import {
  STOP_INFO_LOAD_START,
  STOP_INFO_LOAD_SUCCESS,
  STOP_INFO_LOAD_FAILURE
} from '../actions/action_types.js'

const initialState = {
  inProgress: false,
  errors: [],
  stops: []
};

export const stopInfo = (state = initialState, action) => {
  switch (action.type) {
    case STOP_INFO_LOAD_START:
      return {...state, inProgress: true}
    case STOP_INFO_LOAD_SUCCESS:
      return {...state, inProgress: false, stops: action.payload}
    case STOP_INFO_LOAD_FAILURE:
      return {...state, inProgress: false, errors: action.payload}
    default:
      return state
  }
}

export default stopInfo;
