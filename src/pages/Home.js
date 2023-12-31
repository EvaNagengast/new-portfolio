import React from 'react';
import './home.module.css';
import Hero from '../Components/Hero';
import Intro from '../Components/Intro';
import Projects from '../Components/Projects';
import Contact from '../Components/ContactHome';

function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
