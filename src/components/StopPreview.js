import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import ArrivalChip from './ArrivalChip'
// import { staticArrivals } from '../utils/Offline'

class StopPreview extends Component {
  constructor() {
    super();
    this.state = {
      arrivals: []
    };
  }

  render() {

    return (
      <div className="stop-preview">
        <Link to={ `/stops/${this.props.stop_id}` }>
          <div className='stop-title'>{ this.props.stop_name }</div>
          <div className='stop-arrival-chips'>(Arrival chips go here)</div>
        </Link>
      </div>
    );
  }
}

export default StopPreview;

// <ArrivalChip key={arrival.BlockNumber} {...arrival} />

// { this.state.arrivals.map((arrival) =>
//   "This is where arrival chips go"
// )}
