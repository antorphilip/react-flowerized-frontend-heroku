import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FLOWERIZED
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                EVENTS
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/customize'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CUSTOMIZE
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/reviews'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                REVIEWS
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/aboutUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contactUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>
           

            
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            </ul>
            
          
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
