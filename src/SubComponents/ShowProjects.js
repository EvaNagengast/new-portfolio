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
            <h2> Tech Risers Women</h2>
            <p>
              Tech Risers Women is an intiatve to support women in tech. I
              received the basic information, colour-scheme and pillars and
              designed the website to showcase the mission and vision of tech
              risers women. For the design I chose to use images of some of the
              most important women in tech to show how important women are in
              this field.
            </p>
            <p>Built with HTML, CSS, JavaScript, React</p>
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
            <h2>Jane Corry Website</h2>
            <p>
              This Website was built to showcase the newest work of the author
              Jane Corry and to offer a unique glimpse into the author's world.
              To catch the eye of the user, the landing page shows a gloomy
              scene with animated flashing windows. The website also features a
              dynamic slideshow and a typewriter animation.
            </p>
            <p>
              Built with HTML, CSS, JavaScript, React, Embeds, Bootstrap, npm
              Libraries
            </p>
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
            <h2>101 Part Time Jobs</h2>
            <p>I am part of the constant upkeep of this Music Podcast Website. My latest contributions were to create a responsive "about page" to tell the user more about the host of the show. I also designed a custom audio player and supported the work on the pagination feature. </p>
            <p>
              Built with HTML, CSS, JavaScript, React, Next
            </p>
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
            <h2>Musical Journey</h2>
            <p>
              This web page combines embedded songs and maps, with grid layouts
              and responsive media queries. I illustrated the London
              Underground-themed icons to enhance the user experience and to
              spawn a connection with this beautiful city.
            </p>
            <p>Built with HTML, CSS, JavaScript, Embeds & Bootstrap</p>
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
