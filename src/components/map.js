import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { googleMapsAPIKey } from '../util/helpers'
import MapStopMarker from './map_stop_marker'
import crosshair from '../assets/images/crosshair.svg'
import _isEqual from 'lodash/isEqual'

const YouAreHereMarker = () => (<div id='you-are-here'></div>)
const MapMarkerCenter = () => (<img id='crosshair' src={crosshair} alt='map center' />)

class Map extends Component {
  componentDidMount() {
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
    const coords = this.shortLatLng(this.props.mapCenter)

    return (
      <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsAPIKey() }}
          center={ coords }
          zoom= { 16 }
          options={this.createMapOptions}
          onChange={this.onMapChange}
        >
          <YouAreHereMarker {...this.shortLatLng(this.props.geolocation.coords)} />
          <MapMarkerCenter {...coords} />

          { this.props.nearbyStops.map((stop) =>
            <MapStopMarker key={`map-stop-${stop.stop_id}`} lat={stop.stop_lat} lng={stop.stop_lon} {...stop} />
          )}

        </GoogleMapReact>
      </div>
    )
  }

  shortLatLng(coords) {
    return { lat: coords.latitude, lng: coords.longitude }
  }

  fullLatLng(coords) {
    return { latitude: coords.lat, longitude: coords.lng }
  }

  onMapChange = (params) => {
    let coords = this.fullLatLng(params.center)
    if (!_isEqual(coords, this.props.mapCenter)) {
      this.props.updateMapCenter(coords)
      this.props.loadNearbyStops(coords)
    }
  }
}

export default Map
