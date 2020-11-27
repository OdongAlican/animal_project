import React from'react'
import Footer from './Footer'
import emailjs from 'emailjs-com'
import NavBar from './Navsection'

const Contact = () => {

    // function sendEmail(e) {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_6w8g3c6', 'template_0kwl3xf', e.target, 'user_PxXQmOpuhrdfKIPjAOTQA')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //       e.target.reset();
    //   }

    return (
        <div>
           <NavBar/> 
        <div className="donation-section">
            <div className="donation-information p-2 border">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-lower-section d-flex">
                <div className="first-contact-section">
                    <div className="social-media-contact border d-flex">
                        <div className="facebook-section">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <div className="twitter-section">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div className="skype-section">
                            <i class="fab fa-skype"></i>
                        </div>
                    </div>
                    <div className="detail-media-contact">
                        <span className="d-block">Animal Welfare and Protection Organization (AWPO), P.O. Box 751, Entebbe - Uganda, Eastern Africa,</span>
                        <span className="d-block">Website is:  http://www.animal-welfareprotection.org</span>
                        <span className="d-block">Email is: info@animal-welfareprotection.org</span>
                        <span className="d-block">Mobile Telephone: +256 758 402 502</span>
                    </div>
                    <div className="social-media-contact border d-flex">
                        <div className="facebook-section">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <div className="twitter-section">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div className="skype-section">
                            <i class="fab fa-skype"></i>
                        </div>
                    </div>
                </div>
                <div className="second-contact-section">
                    <h5>Contact Us Information</h5>
                    <p>Our Head Offices are in:
                        Entebbe Municipality,
                        Division B,Lower Namiro Swamp Road, Plot 64B,
                        Wakiso District Uganda, Eastern Africa,</p>
                </div>
            </div>
            {/* <form className="contact-form" onSubmit={sendEmail}>
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
            </form>  */}
            <Footer/>
        </div>
        </div>
    )
}

export default Contact