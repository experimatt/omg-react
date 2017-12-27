import { connect } from 'react-redux'
import ListComponent from '../components/list'
import { loadNearbyStops } from '../actions/actions'
import _isEmpty from 'lodash/isEmpty'

const mapStateToProps = (state) => {
  return {
    geolocation: state.geolocation,
    nearbyStops: state.nearbyStops,
    nearbyStopCoords: _isEmpty(state.mapCenter) ? state.geolocation.coords : state.mapCenter
  }
}

const mapDispatchToProps = {
  loadNearbyStops
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
