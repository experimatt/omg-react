import React from 'react';
import moment from 'moment';

let directionMappings = {
  'NORTHBOUND': 'up',
  'EASTBOUND': 'right',
  'SOUTHBOUND': 'down',
  'WESTBOUND': 'left',
}

const ArrivalChip = (props) => {
  let arrowClass = `icon-omg-arrow-${directionMappings[props.RouteDirection]}`
  
  let minutesAway = moment(props.DepartureTime).diff(moment().startOf('minute'),'minutes')
  let chipClass = 'p20'
  // let separator = String.fromCharCode(8226)
  if (minutesAway <= 5) {chipClass = 'p5'}
  if (minutesAway <= 10) {chipClass = 'p10'}

  return (
    <span className={`arrival-chip ${chipClass}`}>
      <i className={arrowClass}></i> { props.Route}{props.Actual && ` • ${minutesAway} Min` }
    </span>
  )
}

export default ArrivalChip
