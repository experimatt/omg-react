import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { googleMapsAPIKey } from '../util/helpers'
import MapStopMarker from './map_stop_marker'
import MapStopPreview from './map_stop_preview'
import _isEqual from 'lodash/isEqual'
import _isEmpty from 'lodash/isEmpty'

const YouAreHereMarker = () => (<div id='you-are-here'></div>)
const MapCenterMarker = () => (<div id='map-center'></div>)

class Map extends Component {
  componentDidMount() {
    this.props.loadNearbyStops(this.getMapCenter());
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
    const coords = this.shortLatLng(this.getMapCenter())

    return (
      <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsAPIKey() }}
          center={ coords }
          zoom= { 16 }
          options={this.createMapOptions}
          onChange={this.onMapChange}
          onChildClick={this.handleStopClick}
          onClick={this.handleMapClick}
        >
          <YouAreHereMarker {...this.shortLatLng(this.props.userLocation.coords)} />
          <MapCenterMarker {...coords} />
          { this.props.nearbyStops.map((stop) =>
            <MapStopMarker
              key={`map-stop-${stop.stop_id}`}
              lat={stop.stop_lat}
              lng={stop.stop_lon}
              clickable={true}
              active={this.props.mapStopPreview === stop.stop_id}
              {...stop}
            />
          )}
        </GoogleMapReact>
        <MapStopPreview stopId={this.props.mapStopPreview} />
      </div>
    )
  }

  shortLatLng(coords) {
    return { lat: coords.latitude, lng: coords.longitude }
  }

  fullLatLng(coords) {
    return { latitude: coords.lat, longitude: coords.lng }
  }

  getMapCenter = () => {
    return _isEmpty(this.props.mapCenter) ? this.props.userLocation.coords : this.props.mapCenter
  }

  onMapChange = (params) => {
    let coords = this.fullLatLng(params.center)
    if (!_isEqual(coords, this.props.mapCenter)) {
      this.props.updateMapCenter(coords)
      this.props.loadNearbyStops(coords)
    }
  }

  handleMapClick = () => {
    this.props.toggleMapStopPreview(null)
  }

  handleStopClick = (key, childProps) => {
    if (childProps.stop_id) {
      this.props.updateMapCenter(this.fullLatLng(childProps))
      this.props.toggleMapStopPreview(childProps.stop_id)
    }
  }
}

export default Map
