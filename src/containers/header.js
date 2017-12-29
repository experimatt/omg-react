import { connect } from 'react-redux'
import HeaderComponent from '../components/header'
import { updateUserLocation } from '../actions/actions'

const mapStateToProps = (state) => {
  return { userLocation: state.userLocation }
}

const mapDispatchToProps = {
  updateUserLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
