import axios from 'axios'
import * as types from './action_types'
import allStops from '../static/stops_all.json'
import _ from 'lodash'
import geolib from 'geolib'

// helper methods
function dedupeArrivals(arrivals) {
  return _.reverse(_.uniqBy(_.reverse(arrivals), (a) => [a.BlockNumber, a.DepartureTime].join('-')))
}

function getStopInfo(stopId) {
  return _.find(allStops, {'stop_id': parseInt(stopId,10)})
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

export function updateUserLocation() {
  return function(dispatch) {
    dispatch({ type: types.USER_LOCATION.START })
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch({
          type: types.USER_LOCATION.SUCCESS,
          payload: position
      })
    },(error) => {
      dispatch({
          type: types.USER_LOCATION.FAILURE,
          payload: error
      })
    })
  }
}

export function loadNearbyStops(coords) {
  return function(dispatch) {
    dispatch({ type: types.NEARBY_STOPS.START })
    const nearbyStops = calculateNearbyStops(coords, allStops).slice(0, 20)
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
      10
    )
    return { distance: distance, ...stop }
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

export function updateMapCenter(coords) {
  return function(dispatch) {
    dispatch({ type: types.MAP_CENTER.START })
    dispatch({
        type: types.MAP_CENTER.SUCCESS,
        payload: coords
    })
  }
}

export function updateFavoriteStops(stopId) {
  return function(dispatch) {
    dispatch({ type: types.FAVORITES.START })
    dispatch({
        type: types.FAVORITES.SUCCESS,
        payload: stopId
    })
  }
}
