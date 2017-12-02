import axios from 'axios'
import * as types from './action_types'
import stops from '../static/stops.json'
import _find from 'lodash/find'

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
    const stopInfo = _find(stops, {'stop_id': parseInt(stopId,10)} )
    if (stopInfo) {
      dispatch({
        type: types.STOP_INFO.SUCCESS,
        payload: { stopId: stopId, data: stopInfo, }
      })
    } else {
      dispatch({
        type: types.STOP_INFO.FAILURE,
        payload: 'Stop info not found.'
      })
    }
  }
}
