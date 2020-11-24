import React from 'react'
import Footer from './Footer'

const Membership = () => {
    return(
        <div>
            <div className="donation-information p-2 border">
                <h2>Members / Membership</h2>
            </div>
            <div className="membership-images">
                <div className="memebership-top"></div>
                <div className="membership-bottom">
                    <div className="membership-left"></div>
                    <div className="membership-right"></div>
                </div>
            </div>
            <div className="donation-information-details">
                <p>
                    Membership to the Organization is open to all law abiding 
                    persons with interest in animal welfare and animal protection 
                    while the actual volunteer practical work will be based in 
                    the prescribed areas as registered by the NGO Board.  They 
                    can be registered as: Founder Members; Ordinary Members; 
                    Special Interest Members; Honorary Members; Associate Members.
                </p>
            </div>
        <Footer/>
        </div>
    )
}

export default Membership