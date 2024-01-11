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
        />
      </div>

      <div>
        <p>
          Hi, I'm Eva! I love designing and developing beautiful websites and
          bring my passion to DIY projects, community engagement and creative
          ventures.
        </p>
        <a
          href='/'
          target='_blank'
          rel='noreferrer'
          alt='Find out more about Eva Nagengast'>
          find out more about me
        </a>{' '}
        or
        <a
          href='/'
          target='_blank'
          rel='noreferrer'
          alt='Find Eva Nagengasts Projects'>
          have a look at my projects
        </a>
        <CodeSnippet />
      </div>
    </div>
  );
}

export default Intro;
