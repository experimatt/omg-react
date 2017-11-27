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
  let chipClass = `arrival-chip-${chipColor}`
  
  if (props.Actual && 10 < 5) {
    return 'arrival-chip-red'
  }
  let chipClass = {
    SWITCH
  }
  console.log(moment(props.DepartureTime).toString());

  return (
    <div className='arrival-chip'>
      <i className={arrowClass}></i>{ props.Route}{props.Actual && "-" && props.DepartureText }
    </div>
  )
}

export default ArrivalChip
