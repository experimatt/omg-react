import React from 'react';
import LocationUpdater from '../containers/location_updater'
import Header from '../containers/header'
import Footer from './footer'
import '../assets/styles/main.css';

const App = (props) => (
  <div>
    <LocationUpdater />
    <Header />
    { props.children }
    <Footer />
  </div>
)

export default App;
