export function arrowDirection(direction) {
  return {
    'NORTHBOUND': 'up',
    'EASTBOUND': 'right',
    'SOUTHBOUND': 'down',
    'WESTBOUND': 'left',
  }[direction]
}

export function googleMapsAPIKey() {
  return process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
}

export function getLatLonFromCoords(coords, isLoading=false) {
  const defaultCoords = { lat: 44.975918, lng: -93.273079 }

  if (isLoading) { return defaultCoords }
  if (!isLoading) {
    return {
      lat: coords.latitude,
      lng: coords.longitude
    }
  }
}
