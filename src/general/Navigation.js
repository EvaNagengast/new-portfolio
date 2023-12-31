import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './navigation.module.css';
import Logo from '../media/spam.jpg';
import MobileMenu from './MobileNav';
import Menu from './Menu';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div>
        <MobileMenu />
      </div>
      <NavLink to='/'>
        <img
          src={Logo}
          alt='Logo'
        />
      </NavLink>
      <Menu />
    </nav>
  );
}
export default Navigation;
