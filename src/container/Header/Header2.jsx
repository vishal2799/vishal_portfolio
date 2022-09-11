import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
//import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import Profile from '../../assets/3.png';
import Resume from '../../assets/Resume.pdf';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <h1 className='head-text'>Vishal Sharma</h1>
        <h1 className='head-text'>Front-end Developer</h1>
        <p className='p-text'>
          Hi, my name is Vishal Sharma and I'm a front-end developer based in
          Jaipur, India. I have over 2 years of experience in the design
          industry. I'm specialized in front-end development. You can check out
          my work below
        </p>
        <a href={Resume} className='button' download={Resume}>
          Download Resume
        </a>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1], y: [-200, 0] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img
          src={Profile}
          alt='profile_bg'
          className='app__header-img2'
          style={{ width: 160, borderRadius: 80 }}
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
