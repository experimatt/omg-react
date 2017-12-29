import { connect } from 'react-redux'
import HeaderComponent from '../components/header'
import { updateGeolocation } from '../actions/actions'

const mapStateToProps = (state) => {
  return { geolocation: state.geolocation } 
}

const mapDispatchToProps = {
  updateGeolocation
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
