import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './menu.module.css';

function Menu() {
  return (
    <div>
      <ul className={styles.menu}>
        <li>
          <NavLink
            to='/'
            className={({isActive}) => (isActive ? styles.active : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='about'
            className={({isActive}) => (isActive ? styles.active : '')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='contact'
            className={({isActive}) => (isActive ? styles.active : '')}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to='projects'
            className={({isActive}) => (isActive ? styles.active : '')}>
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
