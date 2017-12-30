import React from 'react';
import { railStops } from '../static/data'
import _includes from 'lodash/includes'

const MapStopMarker = (props) => {
  const stopType = (_includes(railStops, props.stop_id) ? 'train' : 'bus')
  const clickable = props.clickable && 'clickable'
  const active = props.active && 'active'
  return <div className={`map-pin ${stopType} ${clickable} ${active}`}></div>
}

export default MapStopMarker
