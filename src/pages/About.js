import React from 'react';
import image from '../media/evanagengast.png';

function About() {
  return (
    <div>
      <h1>Hi, I'm Eva!</h1>
      <img
        src={image}
        alt='Eva Nagengast as producer at reading festival'
      />
      <p>
        My journey has been a winding road filled with diverse experiences, each
        contributing to my unique perspective and skillset. I've worn many hats
        and tackled a variety of roles, excelling in each one. My colourful
        career began in the field of mechatronics, where I explored the
        complexities of integrating mechanics and electronics. From there, I
        ventured into my passion music booking and hospitality. My pivotal
        moment came when I joined a company where I worked with both artificial
        intelligence and audio technology. I had the great opportunity to
        transform AI audio into realistic, human-like speech. This experience
        marked my entry into the world of tech, a journey that continues to
        evolve. Today, I'm a Junior Front-End Developer, and I've found my true
        passion in bringing digital experiences to life. Fueled by my infectious
        enthusiasm, immense dedication, and passion for coding, I seek to create
        user-friendly and visually stunning websites and apps. When I'm not
        working on a new project, you'll often find me volunteering at
        conservation sites, where I'm committed to preserving our local natural
        habitat. I frequently attend music venues and gigs, making it a habit to
        go to concerts support the local subculture . Additionally, I look after
        the local squirrel and bird population, trying to take care of all
        members of our community. I'm excited for the future and can't wait to
        have a chat about your ideas and projects.
      </p>
      <a
        href='/'
        target='_blank'
        rel='noreferrer'
        alt='Contact Eva Nagengast'>
        Contact me
      </a>
      <a
        href='/'
        target='_blank'
        rel='noreferrer'
        alt='Find a Portfolio of my Projects'>
        Projects
      </a>
    </div>
  );
}

export default About;
