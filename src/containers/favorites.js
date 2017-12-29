import { connect } from 'react-redux'
import FavoritesComponent from '../components/favorites'

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

export default connect(mapStateToProps, {})(FavoritesComponent);
