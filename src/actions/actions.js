import axios from 'axios'
import * as types from './action_types'
import allStops from '../static/stops_all.json'
import railStops from '../static/stops_rail.json'
import _ from 'lodash'
import { staticFavorites } from '../static/data'
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
      var arrivals = dedupeArrivals(response.data)
      dispatch({
        type: types.ARRIVALS.SUCCESS,
        payload: { stop_id: stopId, data: arrivals}
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
    const nearbyStops = calculateNearbyStops(coords, combinedStops()).slice(0,11)
    dispatch({
        type: types.NEARBY_STOPS.SUCCESS,
        payload: nearbyStops
    })
  }
}

function calculateNearbyStops(coords, stops) {
  const stopsWithDistance = filterStopsByDistance(coords, stops, 0.01).map((stop) => {
    const distance = geolib.getDistance(
      { latitude: coords.latitude, longitude: coords.longitude },
      { latitude: stop.stop_lat, longitude: stop.stop_lon },
      100
    )
    return { stop_id: stop.stop_id, distance: distance }
  })
  return _.sortBy(stopsWithDistance, 'distance')
}

function filterStopsByDistance(coords, stops, distance) {
  var lat = coords.latitude
  var lon = coords.longitude
  var latMin = lat - distance
  var latMax = lat + distance
  var lonMin = lon - distance
  var lonMax = lon + distance

  return stops.filter((stop) =>
    stop.stop_lat < latMax &&
    stop.stop_lat > latMin &&
    stop.stop_lon < lonMax &&
    stop.stop_lon > lonMin
  )
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
