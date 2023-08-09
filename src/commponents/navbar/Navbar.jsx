import React from 'react'
import './navbar.scss';
//import { RiMenu3Line, RixloseLin } from 'react-icons/ri';
import lo from "../../assets/lo.png"




const Navbar = () => {
    return (
        <div className="Ecommers__navbar">
            <div className="Ecommers__navbar-links">
                <div className="Ecommers__navbar-links_logo">
                    <img src={lo} alt="lo" /></div>
                <ul className='Ecommers__navbar-links_containers'>
                    <p><a href="/">Home</a></p>
                    <p><a href="/about">About web</a></p>
                    <p><a href="/library">Library</a></p>
                </ul>


            </div>
            <div className='Ecommers__navbar-sign'>
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>

        </div>
    )
}

export default Navbar