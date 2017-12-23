import React from 'react';
import busIcon from '../assets/images/pin-bus.png'
import trainIcon from '../assets/images/pin-bus.png'

const MapStopMarker = (props) => {
  let train = (props.stop_type === 'Light Rail')

  return (
    <img className='map-pin'
      src={train ? trainIcon : busIcon }
      alt={`${train ? 'train' : 'bus'} stop`}
    />
  )
}

export default MapStopMarker
