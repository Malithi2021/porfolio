import React from 'react'
import './Contact.css';
import {SiGmail} from 'react-icons/si'
import {SiMicrosoftoutlook} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
   <section id='contact'>
   <h5>Get In Touch</h5>
   <h2>Contact Me</h2>
   <div className='container contact_container'>
  <div className='contact_options'>
    <article className='contact_option'>
    <SiGmail className='contact_option-icon'/>
        <h4>Gmail</h4>
        <h5>malithirumalka@gmail.com</h5>
        <a href='mailto:malithirumalka@gmail.com' target='_blank'>Send a message</a>
    </article>
    <article className='contact_option'>
    <SiMicrosoftoutlook className='contact_option-icon' />
        <h4>Outlook</h4>
        <h5>malithirumalka@outlook.com</h5>
        <a href='mailto:malithirumalka@outlook.com' target='_blank'>Send a message</a>
    </article>
    <article className='contact_option'>
    <BsWhatsapp  className='contact_option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+94 77 653 6321</h5>
        <a href='https://api.whatsapp.com/send?phone=+940776536321' target='_blank'>Send a message</a>
    </article>
  </div>
{/* end of contact options  */}
<form action="">
 <input type='text' name='name' placeholder='Your Full Name' required/>
 <input type='email' name='email' placeholder='Your Email1' required/>
 <textarea  name='message' placeholder='Your Message' rows='7' required></textarea>
 <button type='submit' className='btn btn-primary'>Send Message</button>
</form>

   </div>
   </section>
  )
}

export default Contact;
