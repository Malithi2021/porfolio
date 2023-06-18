import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import './Exp.css'
const Exp = () => {
  return (
   <section id='experience'>
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>

    <div className='container experience_container'>
      <div className='experience_frontend'>
        <h3>Frontend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon' />
             <div>
             <h4 className='text1'>HTML5</h4>
             <small className='text-light'>Experienced</small>
             </div>
                  </article>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4 className='text1'>CSS</h4>
             <small className='text-light'>Experienced</small>

             </div>
                      </article>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4 className='text1'>JavaScript</h4>
             <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4 className='text1'>React JS</h4>
             <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon' />
             <div><h4 className='text1'>Tailwind CSS</h4>
             <small className='text-light'>Beginner</small>
             </div>
          </article>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon' />
             <div><h4 className='text1'>Angular</h4>
             <small className='text-light'>Beginner</small>
             </div>
          </article>
          {/* <article className='experience_details'>
             <BsPatchCheckFill  className='experience_details-icon'/>
           <div>
           <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
           </div>
          </article> */}
        </div>
      </div>
      <div className='experience_backend'>

      <h3>Backend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4 className='text1'>Python</h4>
             <small className='text-light'>Intermediate</small>
             </div>
          </article>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon' />
            <div className='text1'>
            <h4 className='text1'>NodeJS</h4>
             <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4 className='text1'>MSSQL/MySql</h4>
             <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
           <div>
           <h4 className='text1'>PHP</h4>
             <small className='text-light'>Experienced</small>
           </div>
          </article>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4 className='text1'>C</h4>
             <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon' />
             <div>
             <h4 className='text1'>Java</h4>
             <small className='text-light'>Intermediate</small>
             </div>
          </article>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Exp;
