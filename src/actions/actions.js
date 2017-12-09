import axios from 'axios'
import * as types from './action_types'
import allStops from '../static/stops_all.json'
import railStops from '../static/stops_rail.json'
import _ from 'lodash'
import { staticStops } from '../static/helpers'
import geolib from 'geolib'

function combinedStops() {
  return _.merge(allStops, railStops)
}


function dedupeArrivals(arrivals) {
  return _.reverse(_.uniqBy(_.reverse(arrivals), function(a) { return [a.BlockNumber, a.DepartureTime].join('-'); }))
}

export function loadStopArrivals(stopId) {
  const url = `http://svc.metrotransit.org/NexTrip/${stopId}?format=json`
  return function(dispatch) {
    dispatch({ type: types.ARRIVALS.START })
    axios.get(url)
    .then((response) => {
      dispatch({
        type: types.ARRIVALS.SUCCESS,
        payload: { stopId: stopId, data: dedupeArrivals(response.data) }
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
    const stopInfo = _.find(combinedStops(), {'stop_id': parseInt(stopId,10)} )
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

export function updateGeolocation() {
  return function(dispatch) {
    dispatch({ type: types.GEOLOCATION.START })
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch({
          type: types.GEOLOCATION.SUCCESS,
          payload: position
      })
    },(error) => {
      dispatch({
          type: types.GEOLOCATION.FAILURE,
          payload: error
      })
    })
  }
}

export function loadNearbyStops(coords) {
  return function(dispatch) {
    dispatch({ type: types.NEARBY_STOPS.START })
    const nearbyStops = calculateStopDistances(coords, staticStops)
    // allStops.slice(0,49)

    dispatch({
        type: types.NEARBY_STOPS.SUCCESS,
        payload: nearbyStops.slice(0,9)
    })
  }
}

function calculateStopDistances(coords, stops) {
  var stopDistances = stops.map((stop) => {
    const distance = geolib.getDistance(
      _.pick(coords, ['latitude', 'longitude']),
      { latitude: stop.stop_lat, longitude: stop.stop_lon },
      100
    )
    return { stopId: stop.stop_id, distance: distance }
  })
  return _.sortBy(stopDistances, 'distance')
}
