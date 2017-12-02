import { connect } from 'react-redux'
import StopPreviewComponent from '../components/stop_preview'
import { loadStopInfo, loadStopArrivals } from '../actions/actions'

const mapStateToProps = (state, ownProps) => {
  const stopId = ownProps.stop_id
  return {
    stopId: stopId,
    stopInfo: state.stopInfo[stopId] || {},
    arrivals: state.arrivals[stopId] || []
  }
}

const mapDispatchToProps = {
  loadStopInfo,
  loadStopArrivals
}

export default connect(mapStateToProps, mapDispatchToProps)(StopPreviewComponent);
