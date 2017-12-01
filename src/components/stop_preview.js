import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ArrivalChip from './arrival_chip'

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
          <div className='stop-arrival-chips'>
          { this.state.arrivals.map((arrival) =>
            <ArrivalChip key={arrival.BlockNumber} {...arrival} />
          )}
          (Arrival chips go here)</div>
        </Link>
      </div>
    );
  }
}

export default StopPreview;
