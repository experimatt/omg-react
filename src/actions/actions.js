import axios from 'axios'
import * as types from './action_types'

export function loadStopArrivals(stopId) {
  const url = `http://svc.metrotransit.org/NexTrip/${stopId}?format=json`
  return function(dispatch) {
    dispatch({ type: types.ARRIVALS.START })
    axios.get(url)
    .then((response) => {
      dispatch({
        type: types.ARRIVALS.SUCCESS,
        payload: { stopId: stopId, data: response.data, }
      })
    })
    .catch((error) => {
      dispatch({
        type: types.ARRIVALS.FAILURE,
        payload: error
      })
    })
  }
}

export function loadStopInfo(stopId) {
  return function(dispatch) {
    dispatch({ type: types.STOP_INFO.START })
  }
  // TODO: Load data from json stop data here
}
