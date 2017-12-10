import React from 'react';
import { Link } from 'react-router-dom'
import headerLogo from '../assets/images/omg-header-words.svg';
import chevronLeft from '../assets/images/chevron-small-left.png';

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <Link to={ document.referrer }>
          <img src={chevronLeft} alt='back' className='back-button' />
        </Link>
        <img src={headerLogo} alt='omg-transit' className='header-logo' />
      </div>
    </header>
  )
}

export default Header
