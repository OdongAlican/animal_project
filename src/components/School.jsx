import React from 'react'
import NavBar from './Navsection'
import Footer from './Footer'

const School = () => {
    return(
        <div>
            <NavBar/>
            <div className="donation-information p-2 border">
                <h2>Schools</h2>
            </div>
            <div className="donation-information-details">
                <p>
                Awareness creation on the importance of being 
                kind and proper care and handling of animals 
                from a tender age systematically up to adulthood 
                shall create a better view and improvement in animal 
                wellbeing at household, community and national level. 
                Each school in our outreach areas will be assisted 
                to form animal welfare clubs of be kind to animals. 
                Through these; multi-media messages will be channeled 
                regularly. By nature – children love animals, so it 
                is only systematically add on to this strength. 
                </p>
            </div>
        <Footer/>
        </div>
    )
}

export default School