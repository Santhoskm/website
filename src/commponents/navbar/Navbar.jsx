import React { useState } from 'react'
import './navbar.scss';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import lo from "../../assets/lo.png"




const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState(false);
    return (
        <div className="Ecommers__navbar">
            <div className="Ecommers__navbar-links">
                <div className="Ecommers__navbar-links_logo">
                    <img src={lo} alt="lo" /></div>
                <ul className='Ecommers__navbar-links_containers'>
                    <p><a href="#/">Home</a></p>
                    <p><a href="#/about">About web</a></p>
                    <p><a href="#/library">Library</a></p>
                </ul>


            </div>
            <div className='Ecommers__navbar-sign'>
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className='Ecommers__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => settoggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => settoggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='Ecommers__navbar-menu_containers scale-up-center'>
                        <div className='Ecommers__navbar-menu_containers-links'>

                            <p><a href="#/">Home</a></p>
                            <p><a href="#/about">About web</a></p>
                            <p><a href="#/library">Library</a></p>
                            <div className='Ecommers__navbar-menu_containers-links-sign'>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default Navbar
