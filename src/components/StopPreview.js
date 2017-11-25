import React from 'react';
import { Link } from 'react-router-dom'
// import ArrivalChip from './ArrivalChip'
// import { staticArrivals } from '../utils/Offline'
import '../styles/main.css';

class StopPreview extends React.Component {  
  constructor() {
    super();
    this.state = {
      arrivals: []
    };
  }

  // componentDidMount() {
  //   this.fetchArrivalData(this.props.stopId);
  // }
  //
  // fetchArrivalData(stopId) {
  //   const url = `http://svc.metrotransit.org/NexTrip/${stopId}?format=json`
  //   fetch(url)
  //   .then(response=>response.json())
  //   .then(data =>
  //     this.setState({ arrivals: data })
  //   ).catch(function(error) {
  //     console.log(error);
  //   });
  // }

  render() {

    return (
      <div className="stop-preview">
        <Link to={ `/stops/${this.props.stop_id}` }>
          <div className='stop-name'>{ this.props.stop_name }</div><br />
          <div className='arrival-chips'>
            Arrival chips go here
          </div>
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
