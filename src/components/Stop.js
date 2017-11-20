import React, { Component } from 'react';
import Arrival from './Arrival'
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
    console.log('this.state.arrivals', this.state.arrivals);
    
    const arrivals = this.state.arrivals.map((arrival) =>
      <Arrival key={arrival.BlockNumber} {...arrival} />
    );

    return (
      <div className="stop">
        <div className='stop-name'> Raymond Ave Station & Platform</div><br />
        <div className='arrivals'>{ arrivals }</div>
      </div>
    );
  }
}

export default Stop;
