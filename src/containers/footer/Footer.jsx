import React from 'react'
import './footer.scss';
import lo1 from "../../assets/lo1.png"

const Footer = () => {
    return (
        <div className='Ecommers__footer section__padding'>
            <div className='footer-heading'>
                <h1 className='gradient__text'>Do you want to be Web developer</h1>
            </div>

            <div className='Ecommers__footer-btn'>
                <p>Request to Join</p></div>
            <div className='Ecommers__footer-links'>
                <div className='Ecommers__footer-link_logo'>
                    <img src={lo1} alt='lo1' />
                    <p>Sit to be a web developer</p>
                </div>
                <div className='Ecommers__footer-links-div'>
                    <h4>Links</h4>
                    <p>Social Media</p>
                    <p>Contact</p>
                    <p>counters</p>
                </div>
                <div className='Ecommers__footer-links-div'>
                    <h4>Company</h4>
                    <p>Tearm & conditions</p>
                    <p>Privacy</p>
                    <p>Contact</p>
                </div>
                <div className='Ecommers__footer-links-div'>
                    <h4>Get in Touch</h4>
                    <p>Email: wesite007@gmail.com</p>
                    <p>Contact</p>
                    <p>+91 800028002</p>
                </div>
            </div>
            <div className='Ecommers__footer-copyright'>
                <p>2023 Websit. All right reseved.</p>
            </div>
        </div>
    )
}

export default Footer