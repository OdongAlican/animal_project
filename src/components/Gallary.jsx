import React from 'react'
import Footer from './Footer'

const Gallary = () => (
    <div className="gallary-section">
        <div className="photo-information p-2 border bg-secondary">
            <h2>Photos</h2>
        </div>
        <div className="donation-information-details">
            <p>
            We are there to solely advocate for those beings 
            which do not speak (animals) and which have only 
            few people who can speak about their freedoms that 
            are required for them to survive in the environment 
            as specie and also to perform as expected of them without 
            unnecessary pain and suffering. The photo gallery shows 
            some good animal welfare practices of being kind - 
            loving - compassionate and giving good care to animals 
            while others show bad animal welfare practices such as 
            being abusive and cruel. Being abusive and cruel exposes 
            animals to unnecessary pain and suffering thus reducing 
            their performance in nature (to themselves), to man 
            and to the environment  / ecosystems
            </p>
        </div>
        <div className="real-photos-section p-2">
            <div className="left-photos-section">
                <div className="first-image"></div>
                <div className="second-image"></div>
                <div className="third-image"></div>
                <div className="first-image"></div>
                <div className="second-image"></div>
                <div className="third-image"></div>
            </div>

            <div className="right-photos-section"></div>
        </div>
        <Footer/>
    </div>
)

export default Gallary