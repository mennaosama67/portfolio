import React from 'react';
import MainHeader from '../components/MainHeader'
import '../styles/contact.css'
import Button from './../components/Button';
import { Element } from 'react-scroll'

function Contact() {
  return (
      <Element id="contact">
      <div className="container infos p-top" data-aos="slide-right" data-aos-duration="2000" data-aos-offset='500'>
          <MainHeader>Contact</MainHeader>
          <h1 className="about-header">I'd Love To Hear From You.</h1>
     
           <form  className="contact-form" >
            <fieldset  >
             <div className="form-field">
              <input type="text" placeholder='Name'/>
             </div>
             <div className="form-field">
             <input type="email" placeholder='Email'/>
            </div>
            <div className="form-field">
            <input type="text" placeholder='Subject'/>
           </div>
           <div className="form-field">
           <textarea  placeholder='Message' rows= '5'/>
          </div>
            </fieldset>
            
            <Button>Submit</Button>
           </form>
          </div>
        
    

     
  </Element>
  )
  ;
}

export default Contact;
