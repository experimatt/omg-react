import { FAVORITES } from '../actions/action_types'

export const favorites = (state = [], action) => {
  switch (action.type) {
    case FAVORITES.SUCCESS:
      const stopId = parseInt(action.payload,10)
      var favorites = state
      const index = favorites.indexOf(stopId)
      index !== -1 ? favorites.splice(index, 1) : favorites.push(stopId)
      return favorites
    default:
      return state
  }
}

export default favorites;
