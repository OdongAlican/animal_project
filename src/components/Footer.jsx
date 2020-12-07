import React from 'react'
import Logo from '../Logo/animalcircle.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className="fixed-footer">
            <div className="footer-section w-100 text-white p-3 mt-3">
                <div className="footer-logo-section grid-element d-flex justify-content-center">
                    <img src={ Logo } alt="company-log" className="footer-logo-image"/>
                </div>
                <div className="company-details grid-element">
                    <header className="header-styles pb-2">Organization Details</header>
                    <h6 className="mt-3">
                    To empower the community to realize the 
                    importance of animal care and improved quality of life
                    of animals for improved production and 
                    household income, health and environment being
                    conserved.
                    </h6>
                </div>
                <div className="contact-us grid-element">
                    <header className="header-styles pb-2">Contact Us</header>
                    <div className="first-contact-details d-flex mt-3">
                        <div className="icon-section pr-2">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-detail px-2">
                            <h6>
                                P.O BOX 929 Gulu City, Uganda
                            </h6>
                        </div>
                    </div>
                    <div className="first-contact-details d-flex">
                        <div className="icon-section pr-2">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div className="contact-detail px-2">
                            <h6>(+256) 788 983 436</h6>
                        </div>
                    </div>
                    <div className="first-contact-details d-flex">
                        <div className="icon-section pr-2">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div className="contact-detail px-2">
                            <h6>animalrescue@gmail.com</h6>
                        </div>
                    </div>
                    <div className="first-contact-details d-flex">
                        <div className="icon-section pr-2">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div className="contact-detail px-2">
                            <h6>08:00 hours - 17:00 hours</h6>
                            <h6> *Weekends working</h6>
                        </div>
                    </div>
                </div>
                <div className="social-media grid-element">
                    <header className="header-styles pb-2">Follow Us</header>
                    <div className="social-media-links mt-3">
                        <div className="facebook-link">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <div className="twitter-link">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div className="google-plus">
                            <i class="fab fa-google-plus-g"></i>
                        </div>
                        <div className="instagram-link">
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copyright-section d-flex align-items-center">
                <div className="left-copyright">
                    <h6 className="p-3">Copyright © 2020. All rights reserved by, Animal Rescue Initiative</h6>
                </div>
                <div className="right-copyright d-flex">
                    <Link className="p-3" to={{
                            pathname: '/'
                    }}> Home </Link> 
                    <Link className="p-3" to={{
                            pathname: '/about'
                    }}> About Us </Link> 
                    <Link className="p-3" to={{
                        pathname: '/contact'
                    }}> Contact Us </Link> 
                    <Link className="p-3" to={{
                        pathname: '/donations'
                    }}> Donations </Link> 
                </div>
            </div>
        </div>
    )
}

export default Footer