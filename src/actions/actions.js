import axios from 'axios'
import * as types from './action_types'
import allStops from '../static/stops_all.json'
import railStops from '../static/stops_rail.json'
import _ from 'lodash'
import { staticNearbyStops, staticFavorites } from '../static/data'
import geolib from 'geolib'

// helper methods
function dedupeArrivals(arrivals) {
  return _.reverse(_.uniqBy(_.reverse(arrivals), function(a) { return [a.BlockNumber, a.DepartureTime].join('-'); }))
}

function combinedStops() {
  return _.merge(allStops, railStops)
}

function getStopInfo(stopId) {
  return _.find(combinedStops(), {'stop_id': parseInt(stopId,10)} )
}

// actions
export function loadStopArrivals(stopId) {
  const url = `https://svc.metrotransit.org/NexTrip/${stopId}?format=json`
  return function(dispatch) {
    dispatch({ type: types.ARRIVALS.START })
    axios.get(url)
    .then((response) => {
      dispatch({
        type: types.ARRIVALS.SUCCESS,
        payload: { stop_id: stopId, data: dedupeArrivals(response.data) }
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
    const stopInfo = getStopInfo(stopId)
    if (stopInfo) {
      dispatch({
        type: types.STOP_INFO.SUCCESS,
        payload: stopInfo
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
    const nearbyStopIds = calculateStopDistances(coords, staticNearbyStops)
    const nearbyStops = nearbyStopIds.slice(0,9).map((stop) => {
      return getStopInfo(stop.stop_id)
    })

    dispatch({
        type: types.NEARBY_STOPS.SUCCESS,
        payload: nearbyStops
    })
  }
}

function calculateStopDistances(coords, stops) {
  var stopDistances = stops.map((stopId) => {
    const stopInfo = getStopInfo(stopId)
    const distance = geolib.getDistance(
      _.pick(coords, ['latitude', 'longitude']),
      { latitude: stopInfo.stop_lat, longitude: stopInfo.stop_lon },
      100
    )
    return { stop_id: stopId, distance: distance }
  })
  return _.sortBy(stopDistances, 'distance')
}

export function loadFavoriteStops() {
  return function(dispatch) {
    dispatch({ type: types.FAVORITES.START })
    const favoriteStops = staticFavorites.map((stopId) => {
      return getStopInfo(stopId)
    })

    dispatch({
        type: types.FAVORITES.SUCCESS,
        payload: favoriteStops
    })
  }
}
