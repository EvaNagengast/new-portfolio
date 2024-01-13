import React from 'react';
import styles from './projects.module.css';
import ShowProjects from '../../SubComponents/ShowProjects';

function Projects() {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <p className={styles.projectsIntro}>
        Browse through some assorted projects I created by clicking the images.
      </p>
      <p className={styles.projectsIntro}>
        <a
          href='/'
          target='_blank'
          rel='noreferrer'
          alt='Find a portfolio of all my Projects'
          className={styles.portfolioLink}>
          Find all of my projects <u>here</u>
        </a>
      </p>

      <ShowProjects />
    </div>
  );
}

export default Projects;
