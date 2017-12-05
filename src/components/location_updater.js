import { Component } from 'react';

class LocationUpdater extends Component {
  componentDidMount() {
    this.props.updateGeolocation()
  }

  render() { return null }
}

export default LocationUpdater
