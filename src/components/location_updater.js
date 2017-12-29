import { Component } from 'react';

class LocationUpdater extends Component {
  componentDidMount() {
    this.props.updateUserLocation()
  }

  render() { return null }
}

export default LocationUpdater
