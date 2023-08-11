import React from 'react'
import { Navbar } from '../../commponents'
import './library.scss'
import nod from '../../assets/nod.png';
import react from '../../assets/react.png';
import next from '../../assets/next.png';
import angular from '../../assets/angular.png';
import mongo from '../../assets/mongo.png';
import scss from '../../assets/scss.png';
import { Footer } from '../../containers';


const Library = () => {
    return (<div className='Ecommers__head_lib' id='library'>
        <Navbar />
        <div>
            <div className='Ecommers__head_lib-text'>
                <h1 className='gradient__text'>Library using in web site</h1>
            </div>
            <div className='Ecommers__head_lib-content'>
                <div className='Ecommers__head_lib-index'>
                    <img src={nod} alt='nod' width={100} height={100} />
                    <h1>Node js</h1>
                    <p><a href="#nodejs">read more</a></p>
                </div>
                <div className='Ecommers__head_lib-index'>
                    <img src={next} alt='next' width={100} height={100} />
                    <h1>Next js</h1>
                    <p><a href="#nodejs">read more</a></p>

                </div>
                <div className='Ecommers__head_lib-index'>
                    <img src={react} alt='react' width={100} height={100} />
                    <h1>React js</h1>
                    <p><a href="#nodejs">read more</a></p>

                </div>
                <div className='Ecommers__head_lib-index'>
                    <img src={angular} alt='angular' width={100} height={100} />
                    <h1>angular js</h1>
                    <p><a href="#nodejs">read more</a></p>

                </div>
                <div className='Ecommers__head_lib-index'>
                    <img src={mongo} alt='mongo' width={100} height={100} />
                    <h1>mongo DB</h1>
                    <p><a href="#nodejs">read more</a></p>

                </div>
                <div className='Ecommers__head_lib-index'>
                    <img src={scss} alt='scss' width={100} height={100} />
                    <h1>SCSS</h1>
                    <p><a href="#nodejs">read more</a></p>

                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Library
