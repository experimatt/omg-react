import React from 'react';
import StopPreview from '../containers/stop_preview'

const MapStopPreview = (props) => {
  let visible, content

  if (props.stopId) {
    visible = 'visible'
    content = <StopPreview key={props.stopId} stop_id={props.stopId} />
  }

  return (
    <div id='map-stop-preview' className={visible}>
      { content }
    </div>
  )
}

export default MapStopPreview
