import {React, useState, useEffect} from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import Logo from '../Logo/animalcircle.png'

const NavBar = ({ history, text, handleInput }) => {

    const [hiddenNav, sethiddenNav] = useState("")
    
    const hideNav = () => {
        if( window.innerWidth < 1076 &&  hiddenNav==="d-none"){
            sethiddenNav("")
        }else{
            sethiddenNav("d-none")
        }
    }

    const handleResize = () => {
        if(window.innerWidth > 1040 ) {
            sethiddenNav("")
        }
      }

    useEffect(()=> {
        window.addEventListener("resize", handleResize);
    }, [])


    const handleChange = (value) => {
        history.push(`/${value}`)
    }

    return (
        <div className="main-navbar-section">
            <div className="top-nav-section d-flex">
                <div className="left-nav"></div>
                <div className="central-nav">
                    <div className="nav-title p-3 d-flex justify-content-center">
                        <div className="company-logo">
                            <img className="logo-image-style" src={ Logo } alt="logo"></img>
                        </div>
                        <div className="main-page-header">
                            <h5>Welcome to Animal Rescue Initiative</h5>
                            <span className="p-0">Compasionate care</span>
                        </div>
                    </div>
                    <div className="nav-icons d-flex">
                        <div className="icons-deco">
                            <i className="fab fa-facebook-f"></i>
                        </div >
                        <div className="icons-deco">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="icons-deco">
                            <i className="fab fa-youtube"></i>
                        </div>
                        <div className="icons-deco">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="icons-deco">
                            <i className="fas fa-wifi"></i>
                        </div>
                    </div>
                </div>
                <div className="right-nav"></div>
            </div>
            <div className="upper-nav-section">
                <div className="drop-down-icon">
                    <i onClick= { hideNav } class="fas fa-bars text-white"></i>
                </div>
                <div className={`various-screen-nav ${hiddenNav}`}>
                    <NavLink 
                    activeClassName="active-button"
                    className="p-3" exact to={{
                        pathname: '/'
                    }}> HOME </NavLink> 
                    <NavLink 
                    activeClassName="active-button"
                    className="p-3" to={{
                        pathname: '/about'
                    }}> ABOUT US </NavLink> 
                    <NavLink 
                    activeClassName="active-button"
                    className="p-3" to={{
                        pathname: '/contact'
                    }}> CONTACT US </NavLink> 
                    <NavLink 
                    activeClassName="active-button"
                    className="p-3" to={{
                        pathname: '/donations'
                    }}> DONATIONS </NavLink> 
                    <select onChange={event => handleChange(event.target.value)}>
                        <option value="" disabled selected hidden>PARTNERSHIPS</option>
                        <option value="partnership">PARTNERSHIPS</option>
                        <option value="research">RESEARCH</option>
                        <option value="charities">CHARITIES</option>
                        <option value="volunteers">VOLUNTEERS&INTERNS</option>
                        <option value="members">MEMBERS/MEMBERSHIP</option>
                        <option value="schools">SCHOOLS</option>
                    </select>
                    <NavLink 
                    activeClassName="active-button"
                    className="p-3" to={{
                        pathname: '/gallary'
                    }}> GALLARY </NavLink> 
                </div>
                <div className="search-section">
                    <div className="nav-search">
                        <input 
                        value= { text } 
                        type="search" 
                        name="nav-search" 
                        onChange={handleInput}
                        placeholder="Search"/>
                        <i className="fas fa-search nav-fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NavBar)