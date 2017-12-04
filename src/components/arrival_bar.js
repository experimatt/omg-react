import React from 'react';
import moment from 'moment';
import { arrowDirection } from '../util/helpers'

const ArrivalBar = (props) => {
  let arrowClass = `icon-omg-arrow-${arrowDirection(props.RouteDirection)}`
  let arrivalTime = moment(props.DepartureTime)
  let minutesAway = arrivalTime.diff(moment().startOf('minute'),'minutes')
  let arrivalText = arrivalTime.format("h:mm")
  let chipClass = 'p20'
  let realTime = (minutesAway <= 20)

  if (realTime) {arrivalText = `${minutesAway} Min`}
  if (minutesAway <= 10) {chipClass = 'p10'}
  if (minutesAway <= 5)  {chipClass = 'p5'}
  if (minutesAway <= 1)  {arrivalText = 'Now'}

  let descriptionText = ( realTime && arrivalTime.format("h:mm a") )
  let realTimeUnavailable = ( realTime && !props.Actual && <i title="Real-time data unavailable" className="fa fa-question-circle"></i> )

  return (
    <div className={`arrival-bar ${chipClass}`}>
      <div className='arrival-info'>
        <i className={arrowClass}></i>&nbsp;{props.Route}{props.Terminal}<br />
        <span className='description-text'> { props.Description }</span>
      </div>
      <div className='arrival-time'>
        { arrivalText } { realTimeUnavailable }
        <br />
        <div className='description-text'>
        { descriptionText }
        </div>
      </div>
    </div>
  )
}

export default ArrivalBar
