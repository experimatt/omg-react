import { FAVORITES } from '../actions/action_types'

export const favorites = (state = [], action) => {
  switch (action.type) {
    case FAVORITES.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default favorites;
