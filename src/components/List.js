import React, { Component } from 'react';
import StopPreview from './StopPreview'

class List extends Component {
  constructor() {
    super();
    this.state = {
      coords: [],
      nearbyStops: []
    };
  }

  // return static lat/lon for now
  getUserLocation() {
    this.setState({ coords: [44.963244, -93.195938] })
  }
  
  componentDidMount() {
    let coords = this.getUserLocation()
    this.getNearbyStops(coords);
  }

  // return static list for now
  getNearbyStops(coords) {
    let nearbyStops = [
      {
        stop_id:             56006,
        stop_code:           null,
        stop_name:           "Raymond Ave Station",
        stop_desc:           "Near side E",
        stop_lat:            44.963244,
        stop_lon:            -93.195938,
        zone_id:             null,
        stop_url:            "http://www.metrotransit.org/NexTripBadge.aspx?stopnumber=56006",
        location_type:       0,
        wheelchair_boarding: 1
      },
      {
        stop_id:             56005,
        stop_code:           null,
        stop_name:           "Westgate Station",
        stop_desc:           "Near side E",
        stop_lat:            44.967372,
        stop_lon:            93.206256,
        zone_id:             null,
        stop_url:            "http://www.metrotransit.org/NexTripBadge.aspx?stopnumber=56005",
        location_type:       0,
        wheelchair_boarding: 1
      },
      {
        stop_id:             56007,
        stop_code:           null,
        stop_name:           "Fairview Ave Station",
        stop_desc:           "Near side E",
        stop_lat:            44.956235,
        stop_lon:            -93.178463,
        zone_id:             null,
        stop_url:            "http://www.metrotransit.org/NexTripBadge.aspx?stopnumber=56007",
        location_type:       0,
        wheelchair_boarding: 1
      },
    ]

    this.setState({nearbyStops: nearbyStops})
  }

  render() {
    return (
      <div className='list main-container'>
        { this.state.nearbyStops.map((stop) =>
          <StopPreview key={stop.stop_id} {...stop} />
        )}
      </div>
    )
  }
}

export default List
