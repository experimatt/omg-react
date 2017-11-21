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
    // this.fetchStaticData();
  }

  // for offline use
  // fetchStaticData() {
  //   let staticData = [
  //     {"Actual":true,"BlockNumber":718,"DepartureText":"5 Min","DepartureTime":"\/Date(1511232960000-0600)\/","Description":"Green Line to St. Paul-Union Depot","Gate":"2","Route":"Grn","RouteDirection":"EASTBOUND","Terminal":"","VehicleHeading":0,"VehicleLatitude":44.971687,"VehicleLongitude":-93.215321},
  //     {"Actual":true,"BlockNumber":720,"DepartureText":"16 Min","DepartureTime":"\/Date(1511233620000-0600)\/","Description":"Green Line to St. Paul-Union Depot","Gate":"2","Route":"Grn","RouteDirection":"EASTBOUND","Terminal":"","VehicleHeading":0,"VehicleLatitude":44.974771,"VehicleLongitude":-93.260670},
  //     {"Actual":false,"BlockNumber":721,"DepartureText":"9:15","DepartureTime":"\/Date(1511234100000-0600)\/","Description":"Green Line to St. Paul-Union Depot","Gate":"2","Route":"Grn","RouteDirection":"EASTBOUND","Terminal":"","VehicleHeading":0,"VehicleLatitude":44.982415,"VehicleLongitude":-93.276763},
  //     {"Actual":false,"BlockNumber":723,"DepartureText":"9:25","DepartureTime":"\/Date(1511234700000-0600)\/","Description":"Green Line to St. Paul-Union Depot","Gate":"2","Route":"Grn","RouteDirection":"EASTBOUND","Terminal":"","VehicleHeading":0,"VehicleLatitude":0.000000,"VehicleLongitude":0.000000},
  //     {"Actual":false,"BlockNumber":725,"DepartureText":"9:35","DepartureTime":"\/Date(1511235300000-0600)\/","Description":"Green Line to St. Paul-Union Depot","Gate":"2","Route":"Grn","RouteDirection":"EASTBOUND","Terminal":"","VehicleHeading":0,"VehicleLatitude":0.000000,"VehicleLongitude":0.000000},
  //     {"Actual":false,"BlockNumber":726,"DepartureText":"9:45","DepartureTime":"\/Date(1511235900000-0600)\/","Description":"Green Line to St. Paul-Union Depot","Gate":"2","Route":"Grn","RouteDirection":"EASTBOUND","Terminal":"","VehicleHeading":0,"VehicleLatitude":0.000000,"VehicleLongitude":0.000000}
  //   ]
  //
  //   this.setState({ arrivals: staticData })
  // }

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
        <div className='stop-name'>Raymond Ave Station & Platform</div><br />
        <div className='arrivals'>{ arrivals }</div>
      </div>
    );
  }
}

export default Stop;
