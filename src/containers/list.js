import { connect } from 'react-redux'
import ListComponent from '../components/list'
import { loadNearbyStops, calculateStopDistances } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    coords: state.geolocation.coords || {},
    nearbyStops: state.nearbyStops || [],
    stopDistances: state.stopDistances || []
  }
}

const mapDispatchToProps = {
  loadNearbyStops,
  calculateStopDistances
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
