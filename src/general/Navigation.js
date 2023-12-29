import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../media/spam.jpg';
import MobileMenu from '../general/MobileNav';

function Navbar() {
  return (
    <nav>
      <div>
        <MobileMenu />
      </div>
      <NavLink to='/'>
        <img
          src={Logo}
          alt='Logo'
        />
      </NavLink>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='about'>About</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='projects'>Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
