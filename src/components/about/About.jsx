import React from 'react';
import ME from '../../assets/meme.jpeg';
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
              <small>1+ years working</small>
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

          <p>
          Hey there! I'm Malithi Abayadeera, a tech enthusiast and an undergraduate student at the University of Moratuwa. With expertise in web development (React, Node.js, PHP) and a passion for UI/UX design, I bring creativity and functionality together. I also love sharing tech knowledge through writing. Let's create captivating digital experiences together!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
