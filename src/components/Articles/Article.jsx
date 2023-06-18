import React from 'react'
import IMG1 from '../../assets/Screenshot (617).png'
import IMG2 from '../../assets/download (1).jpeg'
import IMG3 from '../../assets/sum.PNG'
import IMG4 from '../../assets/hooks.PNG'
import IMG5 from '../../assets/health.jpg'
import IMG6 from '../../assets/jira.PNG'
import './Article.css'
const Article = () => {


  const data =
    [{
      id: 1,
      image: IMG4,
      title: 'Beginners Guide to React Hooks',
      link: 'https://medium.com/@malithirumalka/a-beginners-guide-to-react-hooks-2f0637eb4053',
      sub:'Medium Article',
      
    },
    {
      id: 2,
      image: IMG5,
      title: '“Revolutionizing Healthcare: The Rise of AI in Improving Patient Outcomes”',
      sub:'Medium Article',
      link: 'https://medium.com/@malithirumalka/revolutionizing-healthcare-the-rise-of-ai-in-improving-patient-outcomes-55ddadf23157',
     
    },
    {
      id: 3,
      image: IMG6,
      title: 'Jira: Streamlining Project Management and Collaboration',
      sub:'Medium Article',
      link: 'https://medium.com/@malithirumalka/jira-streamlining-project-management-and-collaboration-755b91cc5ddc',
    
    },
    ]

  return (
    <section id='article'>
      <h5>My Recent Work</h5>
      <h2>Articles</h2>

      <div className='container article_container'>
        {
          data.map(({ id, image, title, link,sub}) => {
            return (
              <article key={id} className='article_item'>
                <div className='article_item-image'>
                  <img src={image} alt={title} />
                  <small className='article-sub'>{sub}</small>
                </div>
                <h3 className='text1'>{title}</h3>
              
                <div className='article_item-cta'>
                  <a href={link} className='btn1'>See More</a>
                </div>
              </article>
            )
          })
        }




      </div>
    </section>
  )
}

export default Article
