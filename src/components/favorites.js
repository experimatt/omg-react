import React from 'react';
import StopPreview from '../containers/stop_preview'
import { staticFavorites } from '../static/data'
import _isEmpty from 'lodash/isEmpty'

const Favorites = (props) => {
  let favoriteStops, contents

  if (_isEmpty(props.favorites)) {
    contents = "You don't have any favorites yet! Showing Matt's favorites instead..."
    favoriteStops = staticFavorites
  } else {
    favoriteStops = props.favorites
  }

  return (
    <div className='favorites main-container'>
      <div className='heading-bar'>
        <div className='heading bottom-border'>
          Favorites
        </div>
      </div>
      { contents }
      { favoriteStops.map((stopId) =>
        <StopPreview key={stopId} stop_id={stopId} />
      )}
    </div>
  )
}

export default Favorites
