import { MAP_STOP_PREVIEW } from '../actions/action_types'

export const mapStopPreview = (state = null, action) => {
  switch (action.type) {
    case MAP_STOP_PREVIEW.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default mapStopPreview;
