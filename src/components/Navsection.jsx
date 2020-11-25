import {React, useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from '../Logo/animal.jpeg'

const NavBar = ({ history, text, handleInput }) => {

    const handleChange = (value) => {
        history.push(`/${value}`)
    }

    return (
        <div className="main-navbar-section">
            <div className="top-nav-section bg-secondary d-flex">
                <div className="left-nav"></div>
                <div className="central-nav">
                    <div className="nav-title w-75 p-3 d-flex">
                        <div className="company-logo">
                            <img className="logo-image-style" src={ Logo } alt="logo"></img>
                        </div>
                        <div>
                            <p>Animal Initiative</p>
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
            <div className="bg-info upper-nav-section">
                <div className="d-flex">
                    <Link className="p-3" to={{
                        pathname: '/'
                    }}> HOME </Link> 
                    <Link className="p-3" to={{
                        pathname: '/about'
                    }}> ABOUT US </Link> 
                    <Link className="p-3" to={{
                        pathname: '/contact'
                    }}> CONTACT US </Link> 
                    <Link className="p-3" to={{
                        pathname: '/donations'
                    }}> DONATIONS </Link> 
                    <select onChange={event => handleChange(event.target.value)}>
                        <option value="partnership">PARTNERSHIPS</option>
                        <option value="partnership">PARTNERSHIPS</option>
                        <option value="research">RESEARCH</option>
                        <option value="charities">CHARITIES</option>
                        <option value="volunteers">VOLUNTEERS&INTERNS</option>
                        <option value="members">MEMBERS/MEMBERSHIP</option>
                        <option value="schools">SCHOOLS</option>
                    </select>
                    <Link className="p-3" to={{
                        pathname: '/gallary'
                    }}> GALLARY </Link> 
                </div>
                <div className="search-section">
                <div className="nav-search">
                    <input 
                    value= { text } 
                    type="search" 
                    name="nav-search" 
                    onChange={handleInput}
                    placeholder="Search Word"/>
                    <i className="fas fa-search nav-fa-search"></i>
                </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NavBar)