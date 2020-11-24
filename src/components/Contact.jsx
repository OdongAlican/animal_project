import React from'react'
import Footer from './Footer'
import emailjs from 'emailjs-com'

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_6w8g3c6', 'template_0kwl3xf', e.target, 'user_PxXQmOpuhrdfKIPjAOTQA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <div className="bg-info">
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" name="message" />
            </form> 
            <Footer/>
        </div>
    )
}

export default Contact