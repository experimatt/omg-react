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
  let chipColor = 'red'
  
  // if (props.Actual && 10 < 5) {
  //   return 'arrival-chip-red'
  // }
  // let chipClass = {
  //   SWITCH
  // }
  console.log(moment(props.Actual));
  console.log(moment(props.DepartureTime).toString());
  console.log(moment().diff(moment(props.DepartureTime),'minutes)').fromNow());
  
  return (
    <div className={`arrival-chip ${chipColor}`}>
      <i className={arrowClass}></i>{ props.Route}{props.Actual && "-" && props.DepartureText }
    </div>
  )
}

export default ArrivalChip
