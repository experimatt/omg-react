import { connect } from 'react-redux'
import FavoritesComponent from '../components/favorites'
import { loadFavoriteStops } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

const mapDispatchToProps = {
  loadFavoriteStops
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesComponent);
