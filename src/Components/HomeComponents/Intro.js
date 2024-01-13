import React from 'react';
import styles from './intro.module.css';
import profileImage from '../../media/evaProfileImage.png';
import CodeSnippet from '../../SubComponents/CodeSnippet';
function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introImage}>
        <img
          src={profileImage}
          className={styles.profileImage}
          alt="Eva Nagengast Profile"
        />
      </div>

      <div>
        <p className={styles.description}>
          Hi, I'm Eva! I love designing and developing beautiful websites and
          bring my passion to DIY projects, community engagement and creative
          ventures.
          <br />
          <a
            href='/'
            target='_blank'
            rel='noreferrer'
            alt='Find Eva Nagengasts Projects'>
            Find all of my recent projects <u>here</u>
          </a>
        </p>

        <CodeSnippet />
      </div>
    </div>
  );
}

export default Intro;
