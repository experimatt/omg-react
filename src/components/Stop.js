import React from 'react';
import ArrivalBar from './ArrivalBar'
import { staticArrivals } from '../utils/Offline'
import '../styles/main.css';

class Stop extends React.Component {
  constructor() {
    super();
    this.state = {
      arrivals: []
    };
  }

  componentDidMount() {
    this.fetchArrivalData(this.props.stopId);
    // this.fetchStaticData();
  }

  // for offline use
  fetchStaticData() {
    this.setState({ arrivals: staticArrivals })
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

    return (
      <div className="stop">
        <div className='stop-name'>Raymond Ave Station & Platform</div><br />
        <div className='arrivals'>
          { this.state.arrivals.map((arrival) =>
            <ArrivalBar key={arrival.BlockNumber} {...arrival} />
          )}
        </div>
      </div>
    );
  }
}

export default Stop;
