import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './navigation.module.css';
import Logo from '../media/spam.jpg';
import MobileMenu from './MobileMenu';
import Menu from './Menu';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.mobileMenu}>
        <MobileMenu />
      </div>
      <NavLink
        to='/'
        className={({isActive}) => (isActive ? styles.noLogo : styles.logo)}>
        <img
          src={Logo}
          alt='Logo'
          className={styles.logo}
        />
      </NavLink>
      <div className={styles.menu}>
        <Menu />
      </div>
    </nav>
  );
}

export default Navigation;