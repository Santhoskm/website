import React from 'react'

import { Footer, Header } from './containers';

import { Navbar } from './commponents';
import './App.sass';
const App = () => {
    return (
        <div classname="App">
            <div classname="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Footer />
        </div>
    )
}

export default App