import React from 'react'
import Footer from './Footer'
import NavBar from './Navsection'

const Donation = () => (
    <div>
        <NavBar/>
    <div className="donation-section">
        <div className="donation-information p-2 border">
            <h2>Donations</h2>
        </div>
        <div className="donation-information-details">
            <p>
                Being a non-profit making, volunteer and charity based organization; 
                internal membership fees are too little to make any impact on animal 
                welfare at various levels of governance from policy - farm - household. 
                This requires outside non profitable assistance from 
                within Uganda, at Regional Level, at African Continental
            </p>
        </div>
        <Footer/>
    </div>
    </div>
)

export default Donation