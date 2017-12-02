import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ArrivalChip from './arrival_chip'

class StopPreview extends Component {
  componentDidMount() {
    this.props.loadStopArrivals(this.props.stopId)
  }

  render() {
    return (
      <div className="stop-preview">
        <Link to={ `/stops/${this.props.stop_id}` }>
          <div className='stop-title'>{ this.props.stop_name }</div>
          <div className='stop-arrival-chips'>
            { this.props.arrivals.slice(0,4).map((arrival) =>
              <ArrivalChip key={arrival.BlockNumber} {...arrival} />
            )}
          </div>
        </Link>
      </div>
    );
  }
}

export default StopPreview;
