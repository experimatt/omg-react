import React from 'react';
import moment from 'moment';

let directionMappings = {
  'NORTHBOUND': 'up',
  'EASTBOUND': 'right',
  'SOUTHBOUND': 'down',
  'WESTBOUND': 'left',
}

const ArrivalBar = (props) => {
  let arrowClass = `icon-omg-arrow-${directionMappings[props.RouteDirection]}`

  let minutesAway = moment(props.DepartureTime).diff(moment().startOf('minute'),'minutes')
  let chipClass = 'p20'
  if (minutesAway <= 10) {chipClass = 'p10'}
  if (minutesAway <= 5) {chipClass = 'p5'}

  return (
    <div className={`arrival-bar ${chipClass}`}>
      <div className='arrival-info'>
        <i className={arrowClass}></i>&nbsp;{props.Route}<br />
        <span className='description-text'> { props.Description }</span>
      </div>
      <div className='arrival-time'>
        { props.DepartureText }
        &nbsp;
        {!props.Actual && <i title="Real-time data unavailable" className="fa fa-question-circle"></i> }
        <br />
        <div className='description-text'>{ `${minutesAway} min` }</div>
      </div>
    </div>
  )
}

export default ArrivalBar
