import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/sum.PNG'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './Portfolio.css'
const Portfolio = () => {


  const data =
    [{
      id: 1,
      image: IMG1,
      title: 'Hotel Management Web Application',
      github: 'https://github.com/Code-Byte-fit/EXOTEL.git',
      demo: ''
    },
    {
      id: 2,
      image: IMG2,
      title: 'Mining Kit',
      github: 'jdjd',
      demo: ''
    },
    {
      id: 3,
      image: IMG3,
      title: 'Education Stem Camp Website',
      github: 'https://github.com/Malithi2021/Education-Camp.git',
      demo: ''
    },

    {
      id: 4,
      image: IMG4,
      title: 'Beginners Guide to React Hooks',
      github: 'https://medium.com/@malithirumalka/a-beginners-guide-to-react-hooks-2f0637eb4053',
      demo: ''
    },
    {
      id: 5,
      image: IMG5,
      title: 'AI in Healthcare',
      github: 'https://medium.com/@malithirumalka/revolutionizing-healthcare-the-rise-of-ai-in-improving-patient-outcomes-55ddadf23157',
      demo: ''
    },
    {
      id: 6,
      image: IMG6,
      title: 'Jira',
      github: 'https://medium.com/@malithirumalka/jira-streamlining-project-management-and-collaboration-755b91cc5ddc',
      demo: ''
    },
    ]





  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn'>See More</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
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
