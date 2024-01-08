import React from 'react';
import ShowProjects from '../../Subs/ShowProjects';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        Browse through some assorted projects I created, or find all of my
        projects
      </p>{' '}
      <a
        href='/'
        target='_blank'
        rel='noreferrer'
        alt='Find a portfolio of all my Projects'>
        here
      </a>
      <ShowProjects />
    </div>
  );
}

export default Projects;
