import React from 'react'
import Footer from './Footer'
import Image from '../Logo/animal.jpeg'
import NavBar from './Navsection'

const About = () => {
    return (
        <div>
            <NavBar/>
        <div>
            <div className="about-section">
                <div className="about-heading">
                    <h2>About Us</h2>
                </div>
            </div>
            <div className="about-us-content p-2 bg-warning">
                <div className="company-information p-2 border">
                    <h5>Company Information</h5>
                </div>
                <div className="company-information-details p-2">
                    <img className="text-wrap" src={ Image } alt="Home Image"></img>
                    <p>
                    AWPO strategically uses advocacy through; sustainable awareness 
                    creation among the public on animal welfare and its benefits; 
                    impart knowledge – training – skills competences on stakeholders 
                    along the entire livestock value chain on kindness – love – 
                    compassion – humane treatment/ care and handling of animals. 
                    Simultaneously with the above strategies - outreach services 
                    are given especially to vulnerable / disadvantage animal farming 
                    households free of charge to guide – demonstrate and take actions 
                    in the field to correct defects or variances in animal welfare and 
                    its associated animal health so as to elicit maximum potential of 
                    animal health and productivity without abusing animals. Outreach 
                    includes evaluation of actual animal welfare status; investigations, 
                    treatment, vaccinations, surgery, neutering (castration, & spaying),
                    provision of shelters and their use and euthanasia where applicable 

                    While doing the above, AWPO aims at addressing the international 5 
                    Animal Freedoms (5fs) on: thirst and hunger; comfort; pain-injury-disease; 
                    fear and distress and expression of natural behavior. AWPO also advocates 
                    for man – animal – environment relationship of standing together for 
                    a common destiny that will enable attainment of the United Nation’s 
                    (UN) Sustainable Development Agenda (SDA) and its Goals. AWPO’s 
                    Vision is: “Kindness to animals is health and wealth to the households” 
                    while its Goal is “to reduce unnecessary pain and suffering to all 
                    types of animals and improve: animal health – animal productivity – 
                    human health and wealth creation”. AWPO is managed by a Board of 
                    Directors with external and local expertise on animal 
                    welfare / animal health and research
                    </p>
                </div>
            </div>

            <Footer/>
        </div>
        </div>
    )
}

export default About