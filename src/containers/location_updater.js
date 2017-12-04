import { connect } from 'react-redux'
import LocationUpdaterComponent from '../components/location_updater'
import { updateGeolocation } from '../actions/actions'

const mapStateToProps = (state) => {
  return { geolocation: state.geolocation } 
}

const mapDispatchToProps = {
  updateGeolocation
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationUpdaterComponent);
