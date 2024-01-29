import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <footer>
        <p>
          This page was crafted with care and built using React.js. It is{' '}
          <a
            href='https://github.com/EvaNagengast'
            target='_blank'
            rel='noreferrer'
            alt='Github repository Eva Nagengast Portfolio'>
            open-sourced
          </a>{' '}
          so feel free to have a look!
        </p>
        <p>© 2023 Eva Nagengast.</p>
      </footer>
    </div>
  );
}

export default Footer;
