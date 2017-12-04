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
    const defaultCoords = { lat: 44.963244, lng: -93.195938 }

    return (
      <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsAPIKey() }}
          center={ defaultCoords }
          zoom= { 16 }
          options={this.createMapOptions}
        >
          <BusIcon
            lat={44.963244}
            lng={-93.195938}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
