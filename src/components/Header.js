import React from 'react';
import headerLogo from '../images/omg-header-words.svg';

const Header = (props) => (
    <header id='navbar'>
      <img src={headerLogo} alt='omg-transit' className='omg-header-words' />
    </header>
)

export default Header
