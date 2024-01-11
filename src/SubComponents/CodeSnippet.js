import React from 'react';
import styles from './codesnippet.module.css';
import pdf from '../media/spam.jpg';

function CodeSnippet() {
  return (
    <div className={styles.codeSnippet}>
      <div className={styles.menuBar}> _ &#63522; X</div>
      <div className={styles.window}>
        <p id='location'>
          <span className={styles.colorOne}>.location </span>
          <span className={styles.colorTwo}>{'{ '}</span>
          <span className={styles.colorThree}>city</span>
          <span className={styles.colorTwo}>{':'} </span>
          <span className={styles.colorThree}>London</span>
          <span className={styles.colorTwo}>{'; }'}</span>
        </p>
        <p id='skills'>
          <span className={styles.colorOne}>const skills = </span>
          <span className={styles.colorTwo}>[</span>
          <span className={styles.colorThree}>"HTML"</span>
          <span className={styles.colorTwo}>, </span>
          <span className={styles.colorThree}>"CSS"</span>
          <span className={styles.colorTwo}>,</span>{' '}
          <span className={styles.colorThree}> "JavaScript"</span>
          <span className={styles.colorTwo}>,</span>
          <span className={styles.colorThree}> "React.js"</span>
          <span className={styles.colorTwo}>,</span>{' '}
          <span className={styles.colorThree}> "Next.js"</span>
          <span className={styles.colorTwo}>,</span>
          <span className={styles.colorThree}> "GitHub"</span>
          <span className={styles.colorTwo}>]</span>
        </p>
        <p id='likes'>
          <span className={styles.colorOne}> .likes </span>
          <span className={styles.colorTwo}>{'{ '}</span>
          <span className={styles.colorThree}> hobbies</span>
          <span className={styles.colorTwo}>:</span>
          <span className={styles.colorThree}> Coding</span>
          <span className={styles.colorTwo}>,</span>
          <span className={styles.colorThree}> Music</span>
          <span className={styles.colorTwo}>,</span>
          <span className={styles.colorThree}> Environment</span>
          <span className={styles.colorTwo}>,</span>
          <span className={styles.colorThree}> DIY</span>
          <span className={styles.colorTwo}>{'; }'}</span>
        </p>

        <p id='contact'>
          <span className={styles.colorOne}> contact.onClick= </span>
          <a
            href='mailto:eva.nagengast.dev@gmail.com'
            target='_blank'
            rel='noreferrer'
            alt='Click to write a Mail'>
            "Mail"
          </a>
          <span className={styles.colorTwo}>, </span>
          <a
            href='https://www.linkedin.com/in/evanagengast/'
            target='_blank'
            rel='noreferrer'
            alt='Evas LinkedIn page'>
            "LinkedIn"
          </a>
          <span className={styles.colorTwo}>, </span>
          <a
            href='https://github.com/EvaNagengast'
            target='_blank'
            rel='noreferrer'
            alt='Evas Github Profile'>
            "GitHub"
          </a>
        </p>
      </div>
    </div>
  );
}

export default CodeSnippet;
