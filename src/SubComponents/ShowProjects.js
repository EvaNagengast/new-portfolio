import React from 'react';
import project from '../media/project.png';

function ShowProjects() {
  return (
    <div>
      <h3> Author Website and Portfolio </h3>
      <p>
        This Website was built to showcase the newest work of the author Jane
        Corry and to offer a unique glimpse into the author's world. To catch
        the eye of the user, the landing page shows a gloomy scene with animated
        flashing windows. The website also features a dynamic slideshow and a
        typewriter animation.
      </p>
      <p>
        Built with HTML, CSS, JavaScript, React, Embeds, Bootstrap, npm
        Libraries
      </p>
      <a
        href='/'
        target='_blank'
        rel='noreferrer'
        alt='Find a portfolio of all my Projects'>
        GO TO PAGE
      </a>
      <img
        src={project}
        alt='project example'
      />
      <h3> London Music Journey </h3>
      <p>
        Explore London through a musical journey! This web page combines
        embedded songs and maps, with grid layouts and responsive media queries.
        I illustrated the London Underground-themed icons to enhance the user
        experience and to spawn a connection with this beautiful city.{' '}
      </p>
      <p>Built with HTML, CSS, JavaScript, Embeds & Bootstrap </p>
      <a
        href='/'
        target='_blank'
        rel='noreferrer'
        alt='Find a portfolio of all my Projects'>
        GO TO PAGE
      </a>
      <img
        src={project}
        alt='project example'
      />
      <h3>Dictionary</h3>
      <p>
        Built using React.js with the help of npm libraries and enhanced with
        APIs, this page offers word definitions and related images for a search
        term. It becomes fun and engaging as the animated play button talks to
        the user. Behind the scenes, I employed loops and React's mapping
        capabilities to fetch and present the data.
      </p>
      <p>Built with HTML, CSS, React.js, APIs & npm Libraries</p>
      <a
        href='/'
        target='_blank'
        rel='noreferrer'
        alt='Find a portfolio of all my Projects'>
        GO TO PAGE
      </a>
      <img
        src={project}
        alt='project example'
      />
      <h3>Pigeon Showcase </h3>
      <p>
        From a concept to web reality, this Pigeon Showcase was built using
        Bootstrap, media queries, and flexbox for a responsive and beautiful
        website. Originally conceived as a model showcase, I carefully and
        accurately translated the Figma design into a unique appreciation of
        pigeons, all while paying close attention to SEO.{' '}
      </p>
      <p>Built with HTML, CSS, JavaScript & Figma</p>
      <a
        href='/'
        target='_blank'
        rel='noreferrer'
        alt='Find a portfolio of all my Projects'>
        GO TO PAGE
      </a>
      <img
        src={project}
        alt='project example'
      />
    </div>
  );
}

export default ShowProjects;
