import React from 'react';
import headerLogo from '../images/omg-header-words.svg';
import Stop from './Stop'
import '../styles/main.css';

const App = () => (
  <div className="App">
    <header id='navbar'>
      <img src={headerLogo} alt='omg-transit' className='omg-header-words' />
    </header>

    <Stop stopId={56006}/>

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

export default App;
