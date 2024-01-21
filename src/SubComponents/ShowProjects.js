// import React, {useState} from 'react';
import React from 'react';
import styles from './showProjects.module.css';
import projectImage1 from '../media/trwsquare.png';
import projectImage2 from '../media/jcsquare.png';
import projectImage3 from '../media/101square.png';
import projectImage4 from '../media/lmjsquare.png';

function ShowProjects() {
  return (
    <div className={styles.showProjects}>
      <div className={styles.container}>
        <div className={styles.project}>
          <img
            src={projectImage1}
            alt='project one'
          />
          <div className={styles.mask}>
            <h2>Title</h2>
            <p>text weweewewewe</p>
            <a
              href='/'
              className={styles.info}>
              Read More
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src={projectImage2}
            alt='project two'
          />
          <div className={styles.mask}>
            <h2>Title</h2>
            <p>text </p>
            <a
              href='/'
              className={styles.info}>
              Read More
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src={projectImage3}
            alt='project three'
          />
          <div className={styles.mask}>
            <h2>Title</h2>
            <p>text </p>
            <a
              href='/'
              className={styles.info}>
              Read More
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src={projectImage4}
            alt='project four'
          />
          <div className={styles.mask}>
            <h2>Title</h2>
            <p>text</p>
            <a
              href='/'
              className={styles.info}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProjects;
