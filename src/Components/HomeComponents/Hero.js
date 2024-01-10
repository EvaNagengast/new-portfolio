import React, {useState, useEffect} from 'react';
import styles from './hero.module.css';

function Hero() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={styles.hero}>
      <h1 className={styles.headline}>Eva Nagengast</h1>
      <div className={`${styles.noSub} ${fadeIn ? styles.sub : ''}`}>
        <h2 className={styles.subtitle}>
          Front End Development, Creative, DIY
        </h2>
        <button className={styles.heroButton}>Let's connect</button>
        <button className={styles.heroButton}>Explore my page</button>
      </div>
    </div>
  );
}

export default Hero;
