import React from 'react';

import './Main.css';
import About from './About'
import Hero from './Hero';
import Tech from './Tech';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Header from './Header'

function Main(props) {

    return (
        <div>
        <Header />
        <Hero />
        <About />
        <Tech />
        <AboutMe />
        <Portfolio />
        </div>
    );
}

export default Main;