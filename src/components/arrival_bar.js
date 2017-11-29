import React from 'react';
import moment from 'moment';
import '../styles/main.css';

let directionMappings = {
  'NORTHBOUND': 'up',
  'EASTBOUND': 'right',
  'SOUTHBOUND': 'down',
  'WESTBOUND': 'left',
}

const ArrivalBar = (props) => {
  let arrowClass = `icon-omg-arrow-${directionMappings[props.RouteDirection]}`
  let minutesAway = moment(props.DepartureTime).diff(moment().startOf('minute'),'minutes')
  let colorCoding
  if (minutesAway <= 5) {
    colorCoding = 'p5'
  } else if (minutesAway <= 10) {
    colorCoding = 'p10'
  } else {
    colorCoding = 'p20'
  }

  return (
    <div className={`arrival-bar ${colorCoding}`}>
      <div className='arrival-info'>
        <i className={arrowClass}></i>{props.Route}<br />
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
