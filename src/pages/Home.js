import React from 'react';
import './home.module.css';
import Hero from '../Components/HomeComponents/Hero';
import Intro from '../Components/HomeComponents/Intro';
import Projects from '../Components/HomeComponents/Projects';
import Contact from '../Components/HomeComponents/Contact';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Intro />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default Home;
