import { connect } from 'react-redux'
import MapComponent from '../components/map'
import { loadNearbyStops, updateMapCenter } from '../actions/actions'
import _isEmpty from 'lodash/isEmpty'

const mapStateToProps = (state) => {
  return {
    userLocation: state.userLocation,
    nearbyStops: state.nearbyStops,
    mapCenter: _isEmpty(state.userLocation.coords) ? state.mapCenter : state.userLocation.coords
  }
}

const mapDispatchToProps = {
  loadNearbyStops,
  updateMapCenter
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
