import React from 'react';
import busIcon from '../assets/images/pin-bus.png'
import busIconHover from '../assets/images/pin-bus-hover.png'
import trainIcon from '../assets/images/pin-bus.png'
import trainIconHover from '../assets/images/pin-bus-hover.png'

const MapStopMarker = (props) => {
  let iconSrc
  let train = (props.stop_type === 'Light Rail')

  if (train) {
    iconSrc = (props.$hover ? trainIconHover : trainIcon)
  } else {
    iconSrc = (props.$hover ? busIconHover : busIcon)
  }

  return <img className='map-pin' src={iconSrc} alt='transit stop' />
}

export default MapStopMarker
