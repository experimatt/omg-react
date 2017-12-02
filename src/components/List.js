import React, { Component } from 'react';
import StopPreview from '../containers/stop_preview'
import { stopInfo } from '../static/helpers'

class List extends Component {
  constructor() {
    super();
    this.state = {
      coords: [],
      nearbyStops: []
    };
  }

  // return static lat/lon for now
  getUserLocation() {
    this.setState({ coords: [44.963244, -93.195938] })
  }

  componentDidMount() {
    let coords = this.getUserLocation()
    this.getNearbyStops(coords);
  }

  // return static list for now
  getNearbyStops(coords) {
    this.setState({nearbyStops: stopInfo})
  }

  render() {
    return (
      <div className='list main-container'>
        { this.state.nearbyStops.map((stop) =>
          <StopPreview key={stop.stop_id} {...stop} />
        )}
      </div>
    )
  }
}

export default List
