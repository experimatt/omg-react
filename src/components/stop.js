import React, { Component } from 'react';
import MapPreview from './map_preview'
import ArrivalBar from './arrival_bar'

class Stop extends Component {
  componentDidMount() {
    this.props.loadStopInfo(this.props.stopId)
    this.props.loadStopArrivals(this.props.stopId)
  }

  render() {
    let coords = {
      lat: this.props.stopInfo.stop_lat,
      lng: this.props.stopInfo.stop_lon
    }
    return (
      <div className="stop main-container">
        <div className='stop-map-preview'>
          <MapPreview coords={coords} />
        </div>
        <div className='stop-heading-bar'>
          <div className='stop-heading'>
            { this.props.stopInfo.stop_name }
          </div>
          <div className='favorite'>
            <i className="fa fa-star fa-lg"></i>
          </div>
        </div>
        <div className='arrivals'>
        { this.props.arrivals.map((arrival) =>
          <ArrivalBar key={`${this.props.stopId}-${arrival.BlockNumber}-${arrival.DepartureTime}`} {...arrival} />
        )}
        </div>
      </div>
    );
  }
}

export default Stop;
