import React from 'react';

import './Main.css';
import About from './About'
import Hero from './Hero';
import Tech from './Tech';

function Main(props) {

    return (
        <div>
        <Hero />
        <About />
        <Tech />
        </div>
    );
}

export default Main;