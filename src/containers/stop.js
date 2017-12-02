import { connect } from 'react-redux'
import StopComponent from '../components/stop'
import { loadStopInfo, loadStopArrivals } from '../actions/actions'

const mapStateToProps = (state, ownProps) => {
  const stopId = ownProps.match.params.id
  return {
    stopId: stopId,
    stopInfo: state.stopInfo[stopId],
    arrivals: state.arrivals[stopId]
  }
}

const mapDispatchToProps = {
  loadStopInfo,
  loadStopArrivals
}

export default connect(mapStateToProps, mapDispatchToProps)(StopComponent);
