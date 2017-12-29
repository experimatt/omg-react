import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { googleMapsAPIKey } from '../util/helpers'
import MapStopMarker from './map_stop_marker'
import _isEqual from 'lodash/isEqual'

const YouAreHereMarker = () => (<div id='you-are-here'></div>)
const MapCenterMarker = () => (<div id='map-center'></div>)

class Map extends Component {
  componentDidMount() {
    this.props.loadNearbyStops(this.props.mapCenter);
  }

  createMapOptions(maps) {
    return {
      fullscreenControl:  false,
      mapTypeControl:     false,
      panControl:         false,
      streetViewControl:  false,
      styles:             [{ featureType: "poi", elementType: "labels", stylers: [ { visibility: "off" } ]}],
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
          disabled={false}
        >
          <YouAreHereMarker {...this.shortLatLng(this.props.userLocation.coords)} />
          <MapCenterMarker {...coords} />
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
