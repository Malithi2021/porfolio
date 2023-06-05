import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsMedium} from 'react-icons/bs';
const Social = () => {
  return (
    <div className='header_socials'>
      <a href="linkedin.com/in/MalithiAbayadeera" target="_blank"><BsLinkedin/></a>
      <a href="github.com/Malithi2021" target="_blank"><FaGithub /></a>
      <a href="medium.com/@malithirumalka" target="_blank"><BsMedium /></a>
    </div>
  )
}

export default Social;
