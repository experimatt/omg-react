import {
  ARRIVALS_LOAD_START,
  ARRIVALS_LOAD_SUCCESS,
  ARRIVALS_LOAD_FAILURE
} from '../actions/action_types'

const initialState = {
  inProgress: false,
  errors: [],
  arrivals: []
};

export const arrivals = (state = initialState, action) => {
  switch (action.type) {
    case ARRIVALS_LOAD_START:
      return {...state, inProgress: true}
    case ARRIVALS_LOAD_SUCCESS:
      return {...state, inProgress: false, arrivals: action.payload}
    case ARRIVALS_LOAD_FAILURE:
      return {...state, inProgress: false, errors: action.payload}
    default:
      return state
  }
}

export default arrivals;
