import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
//import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.linkedin.com/in/vishal2799'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://github.com/vishal2799'>
          <BsGithub />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/disisvishal/'>
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
