import { connect } from 'react-redux'
import MapComponent from '../components/map'
import { loadNearbyStops } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    geolocation: state.geolocation,
    nearbyStops: state.nearbyStops
    // TODO: keep track of when user pans around the map
    // mapCoords: state.mapCoords || {}
  }
}

const mapDispatchToProps = {
  loadNearbyStops
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
