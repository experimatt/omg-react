import React from 'react';
import { Route, Link } from 'react-router-dom'
import headerLogo from '../images/omg-header-words.svg';
import List from './List'
import Stop from './Stop'
import '../styles/main.css';

class App extends React.Component {
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

        <main>
          <Route exact path="/" component={List} coords={this.state.coords} />
          <Route exact path="/list" component={List} />
          <Route exact path="/map" component={Stop} stopId={56006} />
        </main>

        <footer id='footer'>
          <div className="icon-bar">
            <Link to="/list" className="active" >
              <i className="fa fa-align-justify" ></i>
              <span className="text">List</span>
            </Link>
            <Link to="/map">
              <i className="icon-omg-map"></i>
              <span className="text">Map</span>
            </Link>
            <Link to="/favorites">
              <i className="fa fa-star"></i>
              <span className="text">Favorites</span>
            </Link>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;

// <Stop stopId={56006} />
