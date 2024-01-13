import React, {useState} from 'react';
import styles from './showProjects.module.css';
// import project from '../media/project.png';
import projectImage1 from '../media/trwround.png';
import projectImage2 from '../media/jcround.png';
import projectImage3 from '../media/101round.png';
import projectImage4 from '../media/lmjround.png';

function ShowProjects() {
  const [boxPosition, setBoxPosition] = useState(styles.boxClosed);
  const [boxPosition2, setBoxPosition2] = useState(styles.boxClosed2);
  const [boxPosition3, setBoxPosition3] = useState(styles.boxClosed3);
  const [boxPosition4, setBoxPosition4] = useState(styles.boxClosed4);

  const handleClick = () => {
    const boxVisible =
      boxPosition === styles.boxClosed ? styles.boxOpen : styles.boxClosed;
    setBoxPosition(boxVisible);
  };
  const handleClick2 = () => {
    const boxVisible2 =
      boxPosition2 === styles.boxClosed2 ? styles.boxOpen2 : styles.boxClosed2;
    setBoxPosition2(boxVisible2);
  };
  const handleClick3 = () => {
    const boxVisible3 =
      boxPosition3 === styles.boxClosed3 ? styles.boxOpen3 : styles.boxClosed3;
    setBoxPosition3(boxVisible3);
  };
  const handleClick4 = () => {
    const boxVisible4 =
      boxPosition4 === styles.boxClosed4 ? styles.boxOpen4 : styles.boxClosed4;
    setBoxPosition4(boxVisible4);
  };

  return (
    <div className={styles.showProjects}>
      {/* Project 1 */}

      <div
        className={`${boxPosition} ${styles.box}`}
        onClick={handleClick}>
        <div>
          <h3> Tech Risers Women</h3>
          <p>
            Tech Risers Women is an intiatve to support women in tech. I
            received the basic information, colour-scheme and pillars. I
            designed the website to showcase the mission and vision of tech
            risers women. For the design I chose to use images of some of the
            most important women in tech to show how important women are in this
            field.
          </p>
          <p>Built with HTML, CSS, JavaScript, React</p>{' '}
          <a
            href='/'
            target='_blank'
            rel='noreferrer'
            alt='Website of Tech Risers Women'>
            View Page
          </a>{' '}
          <a
            href='/'
            target='_blank'
            rel='noreferrer'
            alt='Find the GitHub Repository of Tech Risers Women'>
            GithHub
          </a>
        </div>
        <img
          src={projectImage1}
          alt='tech risers women project. Website for initiative to help women in tech'
          className={styles.projectImage}
          onClick={handleClick}
        />
      </div>
      {/* Project 2 */}

      <div
        className={`${boxPosition2} ${styles.box2}`}
        onClick={handleClick2}>
        <div>
          <h3> Tech Risers Women</h3>
          <p>
            Tech Risers Women is an intiatve to support women in tech. I
            received the basic information, colour-scheme and pillars. I
            designed the website to showcase the mission and vision of tech
            risers women. For the design I chose to use images of some of the
            most important women in tech to show how important women are in this
            field.
          </p>
          <p>Built with HTML, CSS, JavaScript, React</p>
          <a
            href='/'
            target='_blank'
            rel='noreferrer'
            alt='Website of Tech Risers Women'>
            View Page
          </a>
          <a
            href='/'
            target='_blank'
            rel='noreferrer'
            alt='Find the GitHub Repository of Tech Risers Women'>
            GithHub
          </a>
        </div>
        <img
          src={projectImage2}
          alt='tech risers women project. Website for initiative to help women in tech'
          className={styles.projectImage}
          onClick={handleClick2}
        />
      </div>
      {/* Project 3*/}
      <div
        className={`${boxPosition3} ${styles.box3}`}
        onClick={handleClick3}>
        <div>
          <h3> Tech Risers Women</h3>
          <p>
            Tech Risers Women is an intiatve to support women in tech. I
            received the basic information, colour-scheme and pillars. I
            designed the website to showcase the mission and vision of tech
            risers women. For the design I chose to use images of some of the
            most important women in tech to show how important women are in this
            field.
          </p>
          <p>Built with HTML, CSS, JavaScript, React</p>
          <a
            href='/'
            target='_blank'
            rel='noreferrer'
            alt='Website of Tech Risers Women'>
            View Page
          </a>
          <a
            href='/'
            target='_blank'
            rel='noreferrer'
            alt='Find the GitHub Repository of Tech Risers Women'>
            GithHub
          </a>
        </div>
        <img
          src={projectImage3}
          alt='tech risers women project. Website for initiative to help women in tech'
          className={styles.projectImage}
          onClick={handleClick3}
        />
      </div>
      {/* Project 4*/}
      <div
        className={`${boxPosition4} ${styles.box4}`}
        onClick={handleClick4}>
        <div>
          <h3> Tech Risers Women</h3>
          <p>
            Tech Risers Women is an intiatve to support women in tech. I
            received the basic information, colour-scheme and pillars. I
            designed the website to showcase the mission and vision of tech
            risers women. For the design I chose to use images of some of the
            most important women in tech to show how important women are in this
            field.
          </p>
          <p>Built with HTML, CSS, JavaScript, React</p>
          <a
            href='/'
            target='_blank'
            rel='noreferrer'
            alt='Website of Tech Risers Women'>
            View Page
          </a>
          <a
            href='/'
            target='_blank'
            rel='noreferrer'
            alt='Find the GitHub Repository of Tech Risers Women'>
            GithHub
          </a>
        </div>
        <img
          src={projectImage4}
          alt='tech risers women project. Website for initiative to help women in tech'
          className={styles.projectImage}
          onClick={handleClick4}
        />
      </div>
    </div>
  );
}

export default ShowProjects;
