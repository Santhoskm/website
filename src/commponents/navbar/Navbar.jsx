import React from 'react'
import './navbar.css';
import { RiMenu3Line, RixloseLin } from 'react-icons/ri';
import logo from "../../assets/logo.png"


const Navbar = () => {
    return (
        <div className="Ecommers__navbar">
            <div className="Ecommers__navbar-links">
                <div className="Ecommers__navbar-links_logo">
                    <img src={logo} alt="logo" /></div>
                <div className='Ecommers__navbar-links_containers'>
                    <p><a herf="#home">Home</a></p>
                    <p><a herf="#web">What is Web</a></p>
                    <p><a herf="#features">Case Studies</a></p>
                    <p><a herf="#library">Library</a></p>
                </div>


            </div>
            <div className='Ecommers__navbar-sign'>
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>

        </div>
    )
}

export default Navbar