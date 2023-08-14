import React from 'react'
import {BsLinkedin,BsStackOverflow} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
         <a href="https://www.linkedin.com/in/satamihir/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
         <a href="https://github.com/satamihir" target="_blank" rel="noreferrer" ><FaGithub /></a>
         <a href="https://stackoverflow.com/users/13634184/mihir-sata" target="_blank" rel="noreferrer" ><BsStackOverflow /></a>
    </div>
  )
}

export default HeaderSocials