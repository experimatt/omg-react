import { connect } from 'react-redux'
import MapComponent from '../components/map'
import { loadNearbyStops, updateMapCenter } from '../actions/actions'
import _isEmpty from 'lodash/isEmpty'

const mapStateToProps = (state) => {
  return {
    geolocation: state.geolocation,
    nearbyStops: state.nearbyStops,
    mapCenter: _isEmpty(state.mapCenter) ? state.geolocation.coords : state.mapCenter
  }
}

const mapDispatchToProps = {
  loadNearbyStops,
  updateMapCenter
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
