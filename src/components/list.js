import React, { Component } from 'react';
import StopPreview from '../containers/stop_preview'

class List extends Component {
  componentDidMount() {
    this.props.loadNearbyStops(this.props.geolocation.coords);
  }

  render() {
    return (
      <div className='list main-container'>
        { this.props.nearbyStops.map((stop) =>
          <StopPreview key={stop.stopId} {...stop} />
        )}
      </div>
    )
  }
}

export default List
