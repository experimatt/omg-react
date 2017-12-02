import React, { Component } from 'react';
import ArrivalBar from './arrival_bar'

class Stop extends Component {
  componentDidMount() {
    this.props.loadStopInfo(this.props.stopId)
    this.props.loadStopArrivals(this.props.stopId)
  }

  render() {
    console.log(this.props.arrivals);
    return (
      <div className="stop main-container">
        <div className='stop-heading'>{ this.props.stopInfo.stop_name }</div>
        <div className='arrivals'>
        { this.props.arrivals.map((arrival) =>
          <ArrivalBar key={arrival.BlockNumber} {...arrival} />
        )}
        </div>
      </div>
    );
  }
}

export default Stop;
