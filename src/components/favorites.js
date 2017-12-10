import React, { Component } from 'react';
import StopPreview from '../containers/stop_preview'

class Favorites extends Component {
  componentDidMount() {
    this.props.loadFavoriteStops();
  }

  render() {
    let contents = "You don't have any favorites yet!"

    if (this.props.favorites) {
      contents = this.props.favorites.map((stop) =>
        <StopPreview key={stop.stop_id} {...stop} />
      )
    }

    return (
      <div className='favorites main-container'>
        <div className='heading-bar'>
          <div className='heading bottom-border'>
            Favorites
          </div>
        </div>
        { contents }
      </div>
    )
  }
}

export default Favorites
