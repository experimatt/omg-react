import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import headerLogo from '../assets/images/omg-header-words.svg';
import chevronLeft from '../assets/images/chevron-small-left.png';

class Header extends Component {
  componentDidMount() {
    this.props.updateGeolocation()
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.updateGeolocation();
  }

  render() {
    return (
      <header>
        <div className='header-container'>
          <Link to={ document.referrer }>
            <img to='#' src={chevronLeft} alt='back' className='back-button' />
          </Link>
          <img src={headerLogo} alt='omg-transit' className='header-logo' />
          <a href='' onClick={this.handleClick} alt='update location'>
            <i className="fa fa-location-arrow fa-2x location-arrow"></i>
          </a>
        </div>
      </header>
    )
  }
}

export default Header
