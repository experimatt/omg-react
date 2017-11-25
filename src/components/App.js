import React from 'react';
import Header from './Header'
import Footer from './Footer'
import '../styles/main.css';

const App = (props) => (
  <div className="App">
    <Header />
    { props.children }
    <Footer />
  </div>
)

export default App;
