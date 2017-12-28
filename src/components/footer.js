import React from 'react';
import { NavLink } from 'react-router-dom'
import { history } from '../store'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="icon-bar">
        <NavLink to="/list" className={history.location.pathname === '/' ? 'active' : ''} >
          <i className="fa fa-align-justify" ></i>
          <span className="text">List</span>
        </NavLink>
        <NavLink to="/map">
          <i className="icon-omg-map"></i>
          <span className="text">Map</span>
        </NavLink>
        <NavLink to="/favorites">
          <i className="fa fa-star"></i>
          <span className="text">Favorites</span>
        </NavLink>
        <NavLink to="/more">
          <i className="fa fa-ellipsis-h"></i>
          <span className="text">More</span>
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer
