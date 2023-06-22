import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsMedium} from 'react-icons/bs';
import Vector1 from '../../assets/Vector12.png'
import Vector2 from '../../assets/Vector11.png'

import CV from  '../../assets/Malithi Abayadeera.pdf'

import ME from '../../assets/me1-removebg-preview.png';
import './Landing.css'
function Landing() {
    return (
        <header>
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hi! I Am</span>
                    <span>Malithi Abayadeera</span>
                    <span>IT Undergraduate</span>
                </div>
                {/* <button className='btn i-button'>Hire me</button> */}
                <div className='cta'>
      <a href={CV} download className='btn cta1'>Download CV</a>
      <a href="#contact" className='btn btn-primary cta2'>Let's Talk</a>
    </div>
                <div className='i-icons'>
      <a href="linkedin.com/in/MalithiAbayadeera" target="_blank"><BsLinkedin/></a>
      <a href="github.com/Malithi2021" target="_blank"><FaGithub /></a>
      <a href="medium.com/@malithirumalka" target="_blank"><BsMedium /></a>
    </div>
            </div>
            <div className='i-right'>
              <img src={Vector1} alt='' />
              <img src={Vector2} alt="" />
              <img src={ME} alt="" />
            </div>

        </div>
        </header>
    )
}

export default Landing
