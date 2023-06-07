import React from 'react';
import ME from '../../assets/tt.jpeg';
import { FaAward } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { MdOutlineArticle } from 'react-icons/md';
import './About.css'

function About() {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article>
            <article className='about_card'>
              <FaLaptopCode className='about_icon' />
              <h5>Projects</h5>
              <small>5 Projects</small>
            </article>
            <article className='about_card'>
              <MdOutlineArticle className='about_icon' />
              <h5>Articles</h5>
              <small>3 Articles</small>
            </article>
          </div>

          <p className='para'>
      Hey there, I'm Malithi Abayadeera, a tech enthusiast and IT undergraduate at the University of Moratuwa. With expertise in React, Node.js, PHP, and a passion for UI/UX design, I combine creativity and functionality to create captivating digital experiences. As a graduate of computer science majoring in software engineering from Edith Cowen University in Perth, I bring a strong foundation in computer science principles. I love sharing tech knowledge through writing and strive to craft intuitive user interfaces. Let's collaborate and bring innovative ideas to life, creating exceptional digital experiences together!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
