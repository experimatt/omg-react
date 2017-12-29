import { FAVORITES } from '../actions/action_types'

export const favorites = (state = [], action) => {
  switch (action.type) {
    case FAVORITES.SUCCESS:
      var favorites = state
      const index = favorites.indexOf(action.payload)
      index !== -1 ? favorites.splice(index, 1) : favorites.push(action.payload)
      return favorites
    default:
      return state
  }
}

export default favorites;
