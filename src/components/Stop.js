import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArrivalBar from './ArrivalBar'
import { staticArrivals } from '../utils/Offline'

class Stop extends Component {
  constructor() {
    super();
    this.state = {
      arrivals: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    // let stopId = this.props.match.params.id
    // this.loadStopArrivals(stopId);
    this.loadStaticStopArrivals();
  }

  // for offline use
  loadStaticStopArrivals() {
    this.setState({ arrivals: staticArrivals })
  }

  loadStopArrivals(stopId) {
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
