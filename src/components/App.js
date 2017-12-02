import React from 'react';
import Header from './header'
import Footer from './footer'
import '../assets/styles/main.css';

const App = (props) => (
  <div>
    <Header />
    { props.children }
    <Footer />
  </div>
)

export default App;
