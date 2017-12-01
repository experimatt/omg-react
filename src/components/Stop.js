import React, { Component } from 'react';
import ArrivalBar from './arrival_bar'

class Stop extends Component {
  componentDidMount() {
    this.props.loadStopArrivals(this.props.stopId)
  }

  render() {
    let arrivals = this.props.arrivals[this.props.stopId] || []
    return (
      <div className="stop main-container">
        <div className='stop-heading'>Stop name goes here</div>
        <div className='arrivals'>
        { arrivals.map((arrival) =>
          <ArrivalBar key={arrival.BlockNumber} {...arrival} />
        )}
        </div>
      </div>
    );
  }
}

export default Stop;
