import React from 'react';
import GoogleMapReact from 'google-map-react';
import { googleMapsAPIKey } from '../util/helpers'
import { Link } from 'react-router-dom'
import MapStopMarker from './map_stop_marker'

export const MapPreview = (props) => {
  const createMapOptions = () =>{
    return {
      fullscreenControl:      false,
      mapTypeControl:         false,
      panControl:             false,
      streetViewControl:      false,
      styles:                 [{ featureType: "poi", elementType: "labels", stylers: [ { visibility: "off" } ]}],
      disableDefaultUI:       true,
      zoomControl:            false,
      draggable:              false,
      scrollWheel:            false,
      gestureHandling:        'none',
      disableDoubleClickZoom: true
    }
  }

  return (
    <Link to='/map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsAPIKey() }}
        center={ {lat: props.stop_lat, lng: props.stop_lon} }
        zoom= { 16 }
        options = { createMapOptions }
      >
        <MapStopMarker
          key={`map-preview-${props.stop_id}`}
          lat={props.stop_lat}
          lng={props.stop_lon}
          stop_id={props.stop_id}
          clickable={false}
        />
      </GoogleMapReact>
    </Link>
  )
}

export default MapPreview
