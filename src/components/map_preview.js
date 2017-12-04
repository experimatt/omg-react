import React from 'react';
import GoogleMapReact from 'google-map-react';
import { googleMapsAPIKey } from '../util/helpers'

export const MapPreview = (props) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: googleMapsAPIKey() }}
      center={ props.coords }
      zoom= { 16 }
      disableDefaultUI={ true }
    />
  )
}

export default MapPreview
