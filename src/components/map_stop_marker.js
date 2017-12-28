import React from 'react';
import { railStops } from '../static/data'
import _includes from 'lodash/includes'

import busIcon from '../assets/images/pin-bus.png'
import busIconHover from '../assets/images/pin-bus-hover.png'
import trainIcon from '../assets/images/pin-train.png'
import trainIconHover from '../assets/images/pin-train-hover.png'

const MapStopMarker = (props) => {
  let iconSrc
  const stopType = (_includes(railStops, props.stop_id) ? 'train' : 'bus')

  if (stopType === 'train') {
    iconSrc = (props.$hover ? trainIconHover : trainIcon)
  } else {
    iconSrc = (props.$hover ? busIconHover : busIcon)
  }

  return <img className='map-pin' src={iconSrc} alt='transit stop' />
}

export default MapStopMarker
