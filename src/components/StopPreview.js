import React, { Component } from 'react';
// import ArrivalChip from './ArrivalChip'
import { staticArrivals } from '../utils/Offline'
import '../styles/main.css';

class Stop extends Component {
  constructor() {
    super();
    this.state = {
      arrivals: []
    };
  }

  componentDidMount() {
    this.fetchArrivalData(this.props.stopId);
  }

  fetchArrivalData(stopId) {
    const url = `http://svc.metrotransit.org/NexTrip/${stopId}?format=json`
    fetch(url)
    .then(response=>response.json())
    .then(data =>
      this.setState({ arrivals: data })
    ).catch(function(error) {
      console.log(error);
    });
  }

  render() {

    return (
      <div className="stop-preview">
        <div className='stop-name'>{ this.props.stop_name }</div><br />
        <div className='arrival-chips'>
          Arrival chips go here
          { this.state.arrivals.map((arrival) =>
            "This is where arrival chips go"
          )}
        </div>
      </div>
    );
  }
}

export default Stop;

// <ArrivalChip key={arrival.BlockNumber} {...arrival} />
