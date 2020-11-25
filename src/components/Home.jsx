import React, { useState, useRef } from 'react'
import ControlledCarousel from './ControlledCourecel'
import ReactPlayer from 'react-player'
import Footer from './Footer'
import NavBar from './Navsection'
import Scroller from './Scroller'

const Home = () => {
    let [text, setText] = useState('');
    const [isFound, setFound] = useState(false);
    const paragraphEl = useRef(null);
    const [test, setValue] = useState('')
    const [ content, setContent ] = useState([])
    let finalArray = []
    let [trial, setTrial] = useState([])
    const myRefOne = useRef();
    const myRefTwo = useRef();
    const myRefThree = useRef();
    const myRefFour = useRef();
    const myRefFive = useRef();
    const myRefSix = useRef();
    const myRefSeven = useRef();

    const displayID = (id)=> {
        if(trial[id] !== "" && myRefOne.current.textContent.includes(trial[id])){
            window.scrollTo({
                behavior: "smooth",
                top: myRefOne.current.offsetTop
              });
        }else if(trial[id] !== "" && myRefTwo.current.textContent.includes(trial[id])){
            window.scrollTo({
                behavior: "smooth",
                top: myRefTwo.current.offsetTop
              });
        }
        else if(trial[id] !== "" && myRefThree.current.textContent.includes(trial[id])){
            window.scrollTo({
                behavior: "smooth",
                top: myRefThree.current.offsetTop
              });
        }
        else if(trial[id] !== "" && myRefFour.current.textContent.includes(trial[id])){
            window.scrollTo({
                behavior: "smooth",
                top: myRefFour.current.offsetTop
              });
        }
        else if(trial[id] !== "" && myRefFive.current.textContent.includes(trial[id])){
            window.scrollTo({
                behavior: "smooth",
                top: myRefFive.current.offsetTop
              });
        }
        else if(trial[id] !== "" && myRefSix.current.textContent.includes(trial[id])){
            window.scrollTo({
                behavior: "smooth",
                top: myRefSix.current.offsetTop
              });
        }
        else if(trial[id] !== "" && myRefSeven.current.textContent.includes(trial[id])){
            window.scrollTo({
                behavior: "smooth",
                top: myRefSeven.current.offsetTop
              });
        }
    }

    const handleInput = (e) => {
        setText(e.target.value);
        const paragraphText = paragraphEl.current.textContent;
        if (e.target.value !== "" && paragraphText.includes(e.target.value)) {
          setFound(true);
          setValue(paragraphText)
          setContent(paragraphText.split('.'))
          content.forEach(element => {
              if(element.toLowerCase().indexOf(e.target.value) >= 0){
                finalArray.push(element)
                setTrial(finalArray)
              }
          });
        } else {
          setFound(false);
        }
      };

    let today = new Date();
    let time = `${today.getHours()}:${today.getMinutes()} Hours`
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;

    return(
        <div>
        <NavBar text = {text} handleInput = { handleInput }/>
        <div className="home-section">
            <ControlledCarousel/>
            <div className="donate-section-div p-2 bg-success mt-2">
                <div className="welcome-message bg-info w-100">
                    <p>Welcome to animal Initiative company</p>
                    <button>
                        Donate<small className="d-none">.</small>
                    </button>
                </div>
            </div>
            { isFound && <div className="model-div border p-3"> {
                trial.map(val => (
                <p className="m-2 search-paragraph" onClick={ () => (displayID(trial.indexOf(val))) }> {val}</p>
                ))
            }</div> }
            <div ref={paragraphEl} className="lower-home-section">
                <div className="left-home-section">
                    <div className="search-button">
                        <button>
                            Services <small className="d-none">.</small>
                        </button>
                    </div>
                    <div className="youtube-section">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
                    />
                    </div>
                    <div ref={ myRefOne } id="1" className="description-sectio p-2 bg-info">
                        <p>
                        We provide voluntary / non-profit making services to 
                        reduce unnecessary pain and suffering by improving 
                        compassion and kindness to animals through advocacy. 
                        Advocacy here involves: multi-media population awareness creation; 
                        improving education – training – skills – competences of 
                        stakeholders on kindness to animals and use of outreach services. 
                        Outreach services here are mainly issued to animals which belong 
                        to the vulnerable / disadvantaged communities. 
                        Such services include: provision of primary animal 
                        health and animal welfare care; animal population 
                        control by neutering (spaying, castration); other 
                        surgical and non-surgical (chemical) methods and 
                        rescue of animals abandoned - stray - homeless or 
                        animals involved in man-made and natural emergencies 
                        by providing shelter - care - protection. We also put 
                        to painless permanent sleep (euthanasia) of animals 
                        who prognosis is hopeless to save them from further 
                        unnecessary pain and suffering.
                        </p>
                    </div>
                    <div className="join-us-button">
                        <div className="w-100 p-3">
                            <button>
                                Join Us<small className="d-none">.</small>
                            </button>
                        </div>
                        <div  ref={ myRefTwo } className="lower-description-section p-2 bg-warning">
                            <h6>
                                To reduce pain and suffering in animals by improving: kindness 
                                compassion. 
                            </h6>
                            <h6>
                            <i ref={ myRefThree } class="fas fa-arrow-right mr-2"></i>
                                Love and humane treatment and care of animals by man.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="right-home-section pt-0">
                    <div className="partners-section bg-info">
                        <div className="partner-button">
                            <button>
                                Partners
                                <small className="d-none">.</small>
                            </button>
                        </div>
                        <h6 ref={ myRefFour } id="2" className="p-2">
                            SPANA and AWPO have partnered to “improve the 
                            lives of working donkeys among the poorest  
                            communities" by provision of technical support 
                            for staff to enable outreach.
                        </h6>
                    </div>
                    <div id="3" className="abroad-section bg-secondary bg-warning p-2">
                        <div className="image-display w-75 m-auto"></div>
                        <h6 ref={ myRefFive } className="mt-3">
                            Animal Aid Abroad (AAA) Australia has partnered 
                            with AWPO to improve the health of working donkeys 
                            and the lives of their poor households 
                            by providing animal medicines.
                        </h6>
                    </div>
                    <div className="news-section bg-secondary bg-danger p-2">
                        <div className="image-display w-75 m-auto"></div>
                        <div className="date-input-section d-flex mt-2">
                            <div className="time-date-section border p-1">
                                <small className="d-block">{ today }</small>
                                <small className="d-block">{ time }</small>
                            </div>
                            <button className="ml-2">
                                News<small className="d-none">.</small>
                            </button>
                        </div>
                        <h6 ref={ myRefSix } id="4" className="mt-3">
                            Primary school goers; veterinary workers; the poor 
                            owners and communities made aware and trained by AWPO 
                            to care and be kind to animals for improved health and 
                            productivity. Free of cost MOBILE ANIMAL CLINICS used 
                            to examine and treat working donkeys in: Sironko; Bulambuli; 
                            Kapchorwa and Bukwo Districts. Schools formed ANIMAL 
                            WELFARE CLUBS to enable permanent: respect and kindness 
                            to animals. COVID-19 directives and guidelines were in 
                            use. AWPO is grateful to the: AAA – Australia 
                            and SPANA – UK Partners. 
                        </h6>
                    </div>
                    <div className="email-address bg-warning py-2">
                        <div ref={ myRefSeven } className="upper-email">
                            <small>EMail:animalwelfareprotection.org@gmail.com</small>
                        </div>
                        <input type="text" className="email-contact w-75" />
                        <div className="check-section d-flex p-2 justify-content-center align-items-center">
                            <input className="email-input d-block mr-2" type="checkbox" name="email-check"/>
                            <div className="check-box-validate">
                                <small>Tick the box and send Privacy policy.</small>
                            </div>
                        </div>
                        <button className="d-block m-auto border-0 p-2">
                            Subscribe<small className="d-none">.</small>
                        </button>
                    </div>
                </div>
            </div>
            <Scroller/>
            <Footer/>
        </div>
        </div>
    )
}

export default Home