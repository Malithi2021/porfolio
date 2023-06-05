import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsMedium} from 'react-icons/bs';
import './Footer.css'
const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer_logo'>MALITHI</a>

    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#skills'>Skills</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#education'>Education</a></li>
      <li><a href='#contact'>Contact Me</a></li>
    </ul>

    <div className='footer_socials'>
    <a href="linkedin.com/in/MalithiAbayadeera" target="_blank"><BsLinkedin/></a>
      <a href="github.com/Malithi2021" target="_blank"><FaGithub /></a>
      <a href="medium.com/@malithirumalka" target="_blank"><BsMedium /></a>
    </div>

   <div className='footer_copyright'>
  <small>&copy; Malithi Abayadeera, All rights reserved.</small>
   </div>

   </footer>
  )
}

export default Footer;
