import { connect } from 'react-redux'
import LocationUpdaterComponent from '../components/location_updater'
import { updateUserLocation } from '../actions/actions'

const mapStateToProps = (state) => {
  return { userLocation: state.userLocation } 
}

const mapDispatchToProps = {
  updateUserLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationUpdaterComponent);
