import { connect } from 'react-redux'
import MapComponent from '../components/map'
import { loadNearbyStops, updateMapCenter, toggleMapStopPreview } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    userLocation: state.userLocation,
    nearbyStops: state.nearbyStops,
    mapCenter: state.mapCenter,
    mapStopPreview: state.mapStopPreview
  }
}

const mapDispatchToProps = {
  loadNearbyStops,
  updateMapCenter,
  toggleMapStopPreview
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
