import React from 'react'
import IMG1 from '../../assets/Screenshot (617).png'
import IMG2 from '../../assets/download (1).jpeg'
import IMG3 from '../../assets/sum.PNG'
import IMG4 from '../../assets/Register.png'
import IMG5 from '../../assets/health.jpg'
import IMG6 from '../../assets/jira.PNG'
import './Portfolio.css'
// import OnePro from '../ProjectDesc/OnePro';
// import TwoPro from './ProjectDesc/TwoPro';
// import ThreePro from './ProjectDesc/ThreePro';
// import FourPro from './components/FourPro';

const Portfolio = () => {


  const data =
    [{
      id: 1,
      image: IMG1,
      title: 'Hotel Management Web Application',
      sub:'ReactJS | ExpressJS Web Application',
      tech: 'Technologies: React JS, Express JS, MySql',
      // page: '/project/one'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Mining Kit for miners',
      sub:'Helmet and Chest Belt for Miners Protection',
      tech: 'Technologies: Microchip Studio, C , Proteus',
      // page: 'TwoPro'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Education Stem Camp Website',
      sub:'HTML5 | CSS Frontend Web Application',
      tech: 'Technologies: HTML, CSS',
      // page: 'TwoPro'
    },

    {
      id: 4,
      image: IMG4,
      title: 'E-commerce Web Application', 
      sub:'Onlnie Footwear Web Application',
      tech: 'Technologies: React JS, Express JS, MongoDB',
      // page: 'TwoPro'
    },

    ]





  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, page, tech ,sub}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                  <small className='portfolio-sub'>{sub}</small>
                </div>
                <h3>{title}</h3>
              
               <div className='portfolio_item-cta'>
                  {/* <a href={github} className='btn'>See More</a>  */}
                  {/* <a href={page} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                  <small className='tect-desc'>{tech}</small>
                </div>
              </article>
            )
          })
        }




      </div>
    </section>
  )
}

export default Portfolio
