import React from 'react';
import headerLogo from '../assets/images/omg-header-words.svg';
import chevronLeft from '../assets/images/chevron-small-left.png';

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <a href=''><img src={chevronLeft} alt='back' className='back-button' /></a>
        <img src={headerLogo} alt='omg-transit' className='header-logo' />
      </div>
    </header>
  )
}

export default Header
