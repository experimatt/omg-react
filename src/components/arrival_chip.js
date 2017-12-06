import React from 'react';
import moment from 'moment';
import { arrowDirection } from '../util/helpers'

const ArrivalChip = (props) => {
  let arrowClass = `icon-omg-arrow-${arrowDirection(props.RouteDirection)}`
  let arrivalTime = moment(props.DepartureTime)
  let minutesAway = arrivalTime.diff(moment(),'minutes')
  let arrivalText = arrivalTime.format("h:mm")
  let realTime = (minutesAway < 20)
  let chipClass = 'p20'

  if (realTime) {arrivalText = `${minutesAway} Min`}
  if (minutesAway <= 10) {chipClass = 'p10'}
  if (minutesAway <= 5)  {chipClass = 'p5'}
  if (minutesAway < 1)   {arrivalText = 'Now'}

  let realTimeUnavailable = ( realTime && !props.Actual && <i title="Real-time data unavailable" className="fa fa-question-circle"></i> )

  return (
    <span className={`arrival-chip ${chipClass}`}>
      <i className={arrowClass}></i> {props.Route}{props.Terminal}
       { realTime && ` • ${arrivalText}`} { realTimeUnavailable }
    </span>
  )
}

export default ArrivalChip
