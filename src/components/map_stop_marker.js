import React from 'react';
import { railStops } from '../static/data'
import _includes from 'lodash/includes'

const MapStopMarker = (props) => {
  const stopType = (_includes(railStops, props.stop_id) ? 'train' : 'bus')
  const disabled = props.disabled && 'disabled'
  return <div className={`map-pin ${stopType} ${disabled}`}></div>
}

export default MapStopMarker
