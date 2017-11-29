import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArrivalBar from './arrival_bar'
import { arrivals } from '../utils/static_data'
// import { loadStopArrivals } from '../actions/dispatches'

class Stop extends Component {
  constructor() {
    super();
    this.state = {
      arrivals: []
    };
  }

  componentDidMount() {
    let stopId = this.props.match.params.id
    this.loadStopArrivals(stopId)
    // this.loadStaticStopArrivals();
  }

  loadStopArrivals(stopId) {
    const url = `http://svc.metrotransit.org/NexTrip/${stopId}?format=json`
    fetch(url)
    .then(response=>response.json())
    .then(data => this.setState({ arrivals: data }))
    .catch(function(error) {
      console.log(error);
    });
  }

  // for offline use
  loadStaticStopArrivals() {
    this.setState({ arrivals: arrivals })
  }

  render() {
    return (
      <div className="stop main-container">
        <div className='stop-heading'>Stop name goes here</div>
        <div className='arrivals'>
          { this.state.arrivals.map((arrival) =>
            <ArrivalBar key={arrival.BlockNumber} {...arrival} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrivals: state.arrivals
  };
};

export default connect(mapStateToProps, {})(Stop);
