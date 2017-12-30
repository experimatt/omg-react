import React, { Component } from 'react';
import MapPreview from './map_preview'
import ArrivalBar from './arrival_bar'
import _includes from 'lodash/includes'

class Stop extends Component {
  componentDidMount() {
    this.props.loadStopInfo(this.props.stopId)
    this.props.loadStopArrivals(this.props.stopId)
  }

  handleFavoriteClick = (e) => {
    e.preventDefault();
    this.props.updateFavoriteStops(this.props.stopId);
  }

  render() {
    let arrivalContent
    const gold = _includes(this.props.favorites, this.props.stopId) && 'gold'

    if (this.props.arrivals && this.props.arrivals.length > 0) {
      arrivalContent = this.props.arrivals.map((arrival) =>
        <ArrivalBar key={`${this.props.stopId}-${arrival.BlockNumber}-${arrival.DepartureTime}`} {...arrival} />
      )
    } else {
    arrivalContent = (
      <div className={`arrival-bar pnd`}>
        <div className='arrival-info'>
          No Data
        </div>
      </div>)
    }

    return (
      <div className="stop main-container">
        <div className='stop-map-preview'>
          <MapPreview {...this.props.stopInfo} />
        </div>
        <div className='heading-bar'>
          <div className='stop-heading'>
            { this.props.stopInfo.stop_name }
          </div>
          <div className='favorite'>
            <a href='' className={`favorite ${gold}`} onClick={this.handleFavoriteClick}>
              <i className='fa fa-star fa-lg'></i>
            </a>
          </div>
        </div>
        <div className='arrivals'>
          { arrivalContent }
        </div>
      </div>
    );
  }
}

export default Stop;
