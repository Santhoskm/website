import React from 'react'
import { Navbar } from '../../commponents'
import './web.scss'
import Brand from '../../commponents/brand/Brand'
import { Footer } from '../../containers'
const Web = () => {
    return (<div className='Ecommers__head_about' id='about wed'>
        <Navbar />
        <div className='Ecommers__head_about-index' id='about wed'>
            <div className='Ecommers__head_about-title'>
                <h1 className='gradient__text'>About Web</h1>
                <div className='Ecommers__head_about-text'>
                    <p>Web design refers to the visual design and experiential aspects of a particular website. We’re going to dive into more detail about web design throughout the rest of this article.
                    </p>

                </div>
            </div>
            <div className='Ecommers__head_about-title2'>
                <h1 className='gradient__text'>About Web developer</h1>
                <p>A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server.</p>

            </div>

        </div>
        <Brand />
        <Footer />
    </div>

    )
}

export default Web