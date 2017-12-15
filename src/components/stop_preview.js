import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ArrivalChip from './arrival_chip'

class StopPreview extends Component {
  componentDidMount() {
    this.props.loadStopArrivals(this.props.stopId)
    this.props.loadStopInfo(this.props.stopId)
  }

  // 3 states to render:
   // 1) Stop title & loading
   // 2) Stop title & arrival chips (when arrival present)
   // 3) Nothing (when no arrivals)

  render() {
    let arrivalContent = 'Loading...'

    if (this.props.arrivals && this.props.arrivals.length > 0) {
      arrivalContent = this.props.arrivals.slice(0,4).map((arrival) =>
        <ArrivalChip key={`${this.props.stopId}-${arrival.BlockNumber}-${arrival.DepartureTime}`} {...arrival} />
      )
    } else {
    arrivalContent = <span className={`arrival-chip pnd`}>No Data</span>
    }

    return (
      <div className="stop-preview">
        <Link to={ `/stops/${this.props.stopId}` }>
          <div className='stop-title'>{ this.props.stopInfo.stop_name }</div>
          <div className='stop-arrival-chips'>{ arrivalContent }</div>
        </Link>
      </div>
    );
  }
}

export default StopPreview;
