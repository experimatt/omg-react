import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => (
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
)

export default Footer
