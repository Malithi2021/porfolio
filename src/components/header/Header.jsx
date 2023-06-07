import React from 'react';
import './Header.css'
import CTA from './CTA';
import ME from '../../assets/me.png';
import Social from './Social';


const Header = () => {
  return (
    <>
      <header>
     
       <div className='container header_container'>
        <h5 className='text-two'>Hello I'm</h5>
        <h1 className='animate-character'>Malithi Abayadeera</h1>
        <h5 className='text-light'>Information Technology Undergraduate</h5>
        <CTA />
       <Social />
     
       <div className='me'>
          <img src={ME} className="meme" alt=""/>  </div>
       </div>
  
       

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </header>
    </>
  )
}

export default Header;
