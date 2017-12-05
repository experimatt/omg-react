import { connect } from 'react-redux'
import ListComponent from '../components/list'
import { loadNearbyStops } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    geolocation: state.geolocation,
    nearbyStops: state.nearbyStops
  }
}

const mapDispatchToProps = {
  loadNearbyStops
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
