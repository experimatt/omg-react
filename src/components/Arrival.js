import React from 'react';
import moment from 'moment';
import '../styles/main.css';

let directionMappings = {
  'NORTHBOUND': 'up',
  'EASTBOUND': 'right',
  'SOUTHBOUND': 'down',
  'WESTBOUND': 'left',
}

const Arrival = (props) => {
  let arrowClass = `icon-omg-arrow-${directionMappings[props.RouteDirection]}`
  console.log(moment(props.DepartureTime).toString());

  return (
    <div className='arrival-bar'>
      <div className='arrival-info'>
        <i className={arrowClass}></i>{props.Route}<br />
        <span className='arrival-description'> { props.Description }</span>
      </div>
      <div className='arrival-time'>
        { props.DepartureText }
        &nbsp;
        {!props.Actual && <i title="Real-time data unavailable" className="fa fa-question-circle"></i> }<br />
      </div>
    </div> 
  )
}

export default Arrival
