// import React, {useState} from 'react';

import styles from './showProjects.module.css';
import projectImage1 from '../../media/trwsquare.png';
import projectImage2 from '../../media/jcsquare.png';
import projectImage3 from '../../media/101Screenshot.png';
import projectImage4 from '../../media/lmjsquare.png';

let projects = [
  {
    name: 'Tech Risers Women',
    description:
      'Tech Risers Women is an intiatve to support women in tech. I received colour-scheme and pillars, and designed the website to showcase the mission and vision of tech risers women. For the design I chose to use images of some  of the most important women in tech in tech.',
    technologies: 'HTML, CSS, JavaScript, React',
    projectimage: projectImage1,
    imagedescription: 'tech risers women main page',
    link: 'https://www.techriserswomen.com/',
    linkdescription: 'website of tech risers women initiative',
  },
  {
    name: 'Jane Corry Website',
    description:
      '  This website was custom built to showcase the newest work of the              author Jane Corry. To catch the eye of the user, the landing page shows a gloomy scene with animated flashing windows. The website also features a dynamic slideshow and a typewriter animation.',
    technologies:
      'HTML, CSS, JavaScript, React, Embeds, Bootstrap, npm Libraries',
    projectimage: projectImage2,
    imagedescription: 'Jane Corry main page',
    link: 'https://www.janecorryauthor.com/',
    linkdescription: 'website of Jane Corry ',
  },
  {
    name: '101 Part Time Jobs',
    description:
      ' I am part of the constant upkeep of this Music Podcast Website. My latest contributions were to create a responsive "about page" to tell the user more about the host of the show. I also designed a custom audio player and supported the work on the pagination feature.',
    technologies: 'HTML, CSS, JavaScript, React, Next, Megaphone API',
    projectimage: projectImage3,
    imagedescription: '101 Part Time Jobs main page',
    link: 'https://www.101parttimejobs.com/',
    linkdescription: 'website of  101 Part Time Jobs',
  },
  {
    name: 'Musical Journey',
    description:
      ' This web page combines embedded songs and maps, with grid layouts and responsive media queries. I illustrated the London Underground-themed icons to enhance the user experience and to spawn a connection with this beautiful city.',
    technologies: 'HTML, CSS, JavaScript, Embeds & Bootstrap',
    projectimage: projectImage4,
    imagedescription: 'Musical Journey through London main page',
    link: 'https://www.techriserswomen.com/',
    linkdescription: 'Music website London',
  },
];

function ShowProjects() {
  return (
    <div className={styles.showProjects}>
      {projects.map(function (project) {
        return (
          <div className={styles.container}>
            <div className={styles.project}>
              <img
                src={project.projectimage}
                alt={project.imagedescription}
              />
              <div className={styles.mask}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p className={styles.built}>
                  Built with {project.technologies}
                </p>
                <a
                  href={project.link}
                  title={project.linkdescription}
                  className={styles.info}>
                 To the Website
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowProjects;
