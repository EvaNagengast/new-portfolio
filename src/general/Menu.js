import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./menu.module.css"

function Menu() {
  return (
    <div>
      <ul className={styles.menu}>
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
    </div>
  );
}

export default Menu;
