import React from 'react';
import styles from './contact.module.css';

function ContactHome() {
  return (
    <div>
      <div className={styles.contactsection}>
        <div className={styles.contactsectionbox}>
          <h4> Contact me</h4>

          <a href='/'> click here to say hello</a>
        </div>
      </div>
    </div>
  );
}

export default ContactHome;
