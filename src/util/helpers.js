export function arrowDirection(direction) {
  return {
    'NORTHBOUND': 'up',
    'EASTBOUND': 'right',
    'SOUTHBOUND': 'down',
    'WESTBOUND': 'left',
  }[direction]
}
