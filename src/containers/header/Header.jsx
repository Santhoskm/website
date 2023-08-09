import React from 'react'
import './header.scss';
import webw from '../../assets/webw.png';


const Header = () => {
    return (
        <div className='Ecommers__header__padding' id='home'>
            <div className='Ecommers__header-content'>
                <h1 className='gradient__text'> Let's Build Somthing amazing on Web</h1>
                <p>“Great web design without functionality is like a sports car with no engine.” “A website without SEO is like a car with no gas.” “Websites promote you 24/7: No employee will do that.”</p>
                <div className='Ecommers__header-content__input'>

                    <button type='button'>Get start</button>
                </div>

                <div className='Ecommers__header-image'>
                    <img src={webw} alt='webw' width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default Header