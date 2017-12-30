import { connect } from 'react-redux'
import StopComponent from '../components/stop'
import { loadStopInfo, loadStopArrivals, updateFavoriteStops } from '../actions/actions'
import _includes from 'lodash/includes'

const mapStateToProps = (state, ownProps) => {
  const stopId = parseInt(ownProps.match.params.id,10)
  return {
    stopId: stopId,
    stopInfo: state.stopInfo[stopId] || {},
    arrivals: state.arrivals[stopId] || [],
    favorite: _includes(state.favorites, stopId)
  }
}

const mapDispatchToProps = {
  loadStopInfo,
  loadStopArrivals,
  updateFavoriteStops
}

export default connect(mapStateToProps, mapDispatchToProps)(StopComponent);
