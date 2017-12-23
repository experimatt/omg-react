import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { googleMapsAPIKey } from '../util/helpers'
import MapStopMarker from './map_stop_marker'
import crosshair from '../assets/images/crosshair.svg'

const MapMarkerCenter = () => (<img id='crosshair' src={crosshair} alt='map center' />)

class Map extends Component {
  componentDidMount() {
    console.log('map didMount');
    this.props.loadNearbyStops(this.props.geolocation.coords);
  }

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
      lat: this.props.geolocation.coords.latitude,
      lng: this.props.geolocation.coords.longitude
    }
    console.log(this.props);

    return (
      <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsAPIKey() }}
          center={ coords }
          zoom= { 16 }
          options={this.createMapOptions}
        >
          <MapMarkerCenter lat={coords.lat} lng={coords.lng} />

          { this.props.nearbyStops.map((stop) =>
            <MapStopMarker key={`map-stop-${stop.stop_id}`} lat={stop.stop_lat} lng={stop.stop_lon} {...stop} />
          )}

        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
