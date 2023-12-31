import React from 'react';
import './contact.module.css';
import pdf from '../media/spam.jpg';

function Contact() {
  return (
    <div>
      <h1>Contact me!</h1>
      <ul>
        <li>
          *** MAIL
          <a
            href='mailto:eva.nagengast.dev@gmail.com'
            target='_blank'
            rel='noreferrer'
            alt='Click to write me a Mail'>
            eva.nagengast.dev@gmail.com
          </a>
        </li>
        <li>
          *** LINKEDIN
          <a
            href='https://www.linkedin.com/in/evanagengast/'
            target='_blank'
            rel='noreferrer'
            alt='Evas LinkedIn page'>
            linkedin.com/in/evanagengast/
          </a>
        </li>
        <li>
          ***GITHUB
          <a
            href='https://github.com/EvaNagengast'
            target='_blank'
            rel='noreferrer'
            alt='Evas Github Profile'>
            github.com/EvaNagengast
          </a>
        </li>
        <li>
          ***CV
          <a
            href={pdf}
            target='_blank'
            rel='noreferrer'
            alt='PDF of Evas Resume'>
            see or download my CV
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
