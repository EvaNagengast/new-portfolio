import React, {useState, useEffect} from 'react';
import styles from './hero.module.css';

function Hero() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    console.log("fadein?");
    setFadeIn(true);
  }, []);

  return (
    <div>
      <h1 className={`${styles.noHeadline} ${fadeIn ? styles.headline : ''}`}>
        Eva Nagengast
      </h1>
      <button>Let's connect</button> <button>Explore my page</button>
    </div>
  );
}

export default Hero;