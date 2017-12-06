import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { googleMapsAPIKey } from '../util/helpers'
import busIcon from '../assets/images/pin-bus.png'

const BusIcon = ({ text }) => {
  return (
    <div>
      <img src={busIcon} alt='bus pin' />
    </div>
  )
}

class Map extends Component {
  createMapOptions(maps) {
    var mapStyles = [{ featureType: "poi", elementType: "labels", stylers: [ { visibility: "off" } ]}];
    return {
      fullscreenControl:  false,
      mapTypeControl:     false,
      panControl:         false,
      streetViewControl:  false,
      styles:             mapStyles,
      zoomControl:        true,
      zoomControlOptions: { position: maps.ControlPosition.LEFT_CENTER }
    }
  }

  render() {
    const coords = {
      lat: this.props.coords.latitude,
      lng: this.props.coords.longitude
    }

    return (
      <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsAPIKey() }}
          center={ coords }
          zoom= { 16 }
          options={this.createMapOptions}
        >
          <BusIcon
            lat={coords.lat}
            lng={coords.lng}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
