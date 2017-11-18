import React, { Component } from 'react';
import logo from '../images/omg-header-words.svg';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      arrivals: [],
      stop: {}
    };
  }

  componentDidMount() {
    this.fetchArrivalData(56006);
  }

  fetchArrivalData(stopId) {
    const url = `http://svc.metrotransit.org/NexTrip/${stopId}?format=json`
    fetch(url)
    .then(response=>response.json())
    .then(data =>
      this.setState({ arrivals: data })
    ).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    console.log('this.state.arrivals', this.state.arrivals);
    
    const arrivals = this.state.arrivals.map((arrival) =>
      <div key={arrival.BlockNumber}>
        <strong> {arrival.Route} {arrival.RouteDirection.toLowerCase()}</strong>: { arrival.DepartureText }{!arrival.Actual && ' (?)' }<br />
        <span className='arrival-description'> { arrival.Description }</span>
        <br /><br />
      </div>
    );

    return (
      <div className="App">
        <header id='navbar'>
          <img src={logo} alt='logo' className='omg-icon' />
        </header>
      
        <div className='App-header' id="stop-heading">
          <div className='stop-title' > Raymond Ave Station</div>
          <div className='stop-description'>Stop # 56006, Near Side E</div>
        </div><br />

        <div id='arrival-times'>
          { arrivals }
        </div>
        <footer id='footer'>
          <div class="icon-bar">
            <a className="active" href="/list">
              <i className="fa fa-align-justify" ></i>
              <span className="text">List</span>
            </a>
            <a href="/map">
              <i className="icon-omg-map"></i>
              <span className="text">Map</span>
            </a>
            <a href="/favorites">
              <i class="fa fa-star"></i>
              <span className="text">Favorites</span>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
