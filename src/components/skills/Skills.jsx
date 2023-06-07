import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './Skills.css'
const Portfolio = () => {
  return (
    <section id='skills'>
      <h5>What else I can do</h5>
      <h2>Other Skills</h2>

      <div className='container skills_container'>
      <article className='skill'>
          <div className='skill_head'>
            <h3>Design Tools</h3>
          </div>
          <ul className='skill_list'>
            <li><BiCheck className='skill_list-icon' />
              <p>Blendar</p>
            </li>
            <li><BiCheck className='skill_list-icon' />
              <p>Gimp</p>

            </li> <li><BiCheck className='skill_list-icon' />
              <p>Sketchup</p>

            </li>
          </ul>
        </article>
        <article className='skill'>
          <div className='skill_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='skill_list'>
            <li><BiCheck className='skill_list-icon' />
              <p>Figma</p>
            </li>
            <li><BiCheck className='skill_list-icon' />
              <p>Marvel</p>

            </li> 
          </ul>

        </article>
        {/* /*end of UIUX*/}
        <article className='skill'>
          <div className='skill_head'>
            <h3>Project Management Tools</h3>
          </div>

          <ul className='skill_list'>
            <li><BiCheck className='skill_list-icon' />
              <p>Jira</p>
            </li>
            <li><BiCheck className='skill_list-icon' />
              <p>Trello</p>

            </li> <li><BiCheck className='skill_list-icon' />
              <p>Confluence</p>

            </li>
          </ul>

        </article>
        {/* /*end of verion*/}
       
        <article className='skill'>
          <div className='skill_head'>
            <h3>Office Tools</h3>
          </div>
          <ul className='skill_list'>
          <li><BiCheck className='skill_list-icon' />
              <p> MS Office Suite</p>
            </li>
          </ul>
        </article>

        <article className='skill'>
          <div className='skill_head'>
            <h3>Version Control</h3>
          </div>

          <ul className='skill_list'>
        
            <li><BiCheck className='skill_list-icon' />
              <p>Git</p>
            </li>
          </ul>

        </article>


        <article className='skill'>
          <div className='skill_head'>
            <h3>Data Visualization</h3>
          </div>
          <ul className='skill_list'>
          <li><BiCheck className='skill_list-icon' />
              <p>Looker Studio</p>
            </li>
          </ul>
        </article>

      

      </div>
    </section>
  )
}

export default Portfolio
