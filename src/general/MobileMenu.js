import React, {useState, useRef, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './mobileMenu.module.css';

function MobileMenu() {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setmobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setmobileMenuOpen(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        mobileMenuOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setmobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [mobileMenuOpen]);

  return (
    <div
      className={styles.mobileMenu}
      ref={ref}>
      {/* Hamburger Button */}
      <button
        className={styles.mobileMenuButton}
        onClick={toggleMobileMenu}>
        <div
          className={
            mobileMenuOpen
              ? styles.mobileMenuTopOpen
              : styles.mobileMenuTopClosed
          }></div>
        <div
          className={
            mobileMenuOpen
              ? styles.mobileMenuMidOpen
              : styles.mobileMenuMidClosed
          }></div>
        <div
          className={
            mobileMenuOpen
              ? styles.mobileMenuBottomOpen
              : styles.mobileMenuBottomClosed
          }></div>
      </button>
      <div
        className={mobileMenuOpen ? styles.mobileNav : styles.mobileNavClosed}>
        {/* Menu */}

        <ul className={`${styles.mobileNavMenu} ${styles.open}`}>
          <li className={styles.mobileMenuLink}>
            <NavLink
              to='/'
              className={({isActive}) => (isActive ? styles.active : '')}
              onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className={styles.mobileMenuLink}>
            <NavLink
              to='about'
              className={({isActive}) => (isActive ? styles.active : '')}
              onClick={closeMobileMenu}>
              About
            </NavLink>
          </li>
          <li className={styles.mobileMenuLink}>
            <NavLink
              to='contact'
              className={({isActive}) => (isActive ? styles.active : '')}
              onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
          <li className={styles.mobileMenuLink}>
            <NavLink
              to='projects'
              className={({isActive}) => (isActive ? styles.active : '')}
              onClick={closeMobileMenu}>
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
