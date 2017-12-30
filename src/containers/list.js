import { connect } from 'react-redux'
import ListComponent from '../components/list'
import { loadNearbyStops } from '../actions/actions'
import _isEmpty from 'lodash/isEmpty'

const mapStateToProps = (state) => {
  return {
    nearbyStops: state.nearbyStops,
    nearbyStopCoords: _isEmpty(state.userLocation.coords) ? state.mapCenter : state.userLocation.coords
  }
}

const mapDispatchToProps = {
  loadNearbyStops
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
