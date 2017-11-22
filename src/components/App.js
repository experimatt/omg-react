import React, { Component } from 'react';
import headerLogo from '../images/omg-header-words.svg';
import List from './List'
// import Stop from './Stop'
import '../styles/main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coords: []
    };
  }

  componentDidMount() {
    this.getUserLocation();
  }

  // TODO: Implement call to get user's geolocation here
  getUserLocation() {
    // return static lat/lon for now
    this.setState({ coords: [44.963244, -93.195938] })
  }

  render() {
    console.log('this.state.coords', this.state.coords);

    return (
      <div className="App">
        <header id='navbar'>
          <img src={headerLogo} alt='omg-transit' className='omg-header-words' />
        </header>

        <List coords={this.state.coords} />

        <footer id='footer'>
          <div className="icon-bar">
            <a className="active" href="/list">
              <i className="fa fa-align-justify" ></i>
              <span className="text">List</span>
            </a>
            <a href="/map">
              <i className="icon-omg-map"></i>
              <span className="text">Map</span>
            </a>
            <a href="/favorites">
              <i className="fa fa-star"></i>
              <span className="text">Favorites</span>
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;

// <Stop stopId={56006} />
