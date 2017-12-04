import { connect } from 'react-redux'
import MapComponent from '../components/map'

const mapStateToProps = (state) => {
  return {
    lat: (state.geolocation.coords && state.geolocation.coords.latitude),
    lng: (state.geolocation.coords && state.geolocation.coords.longitude)
  }
}

export default connect(mapStateToProps, {})(MapComponent);
