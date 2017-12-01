import { connect } from 'react-redux'
import StopComponent from '../components/stop'
import { loadStopArrivals, loadStopInfo } from '../actions/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    stopId: ownProps.match.params.id,
    stopInfo: state.stopInfo,
    arrivals: state.arrivals
  }
}

const mapDispatchToProps = {
  loadStopInfo,
  loadStopArrivals
}

export default connect(mapStateToProps, mapDispatchToProps)(StopComponent);
