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
