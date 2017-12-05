import { connect } from 'react-redux'
import MapComponent from '../components/map'

const mapStateToProps = (state) => {
  return {
    isLoading: state.geolocation.isLoading,
    coords: state.geolocation.coords || {}
    // TODO: keep track of when user pans around the map
    // mapCoords: state.mapCoords || {}
  }
}

export default connect(mapStateToProps, {})(MapComponent);
