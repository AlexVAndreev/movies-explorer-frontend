import React from 'react';

import './Hero.css';
import landingImg from '../../images/pic__COLOR_landing-logo.svg';

function Hero({ ref }) {
    return (
        <section className='hero'>
            <div className='hero__wrapper'>
                <img src={landingImg} className='hero__image' alt='landing-logo' />
                <h1 className='hero__title'>Учебный проект студента факультета Веб-разработки.</h1>
            </div>
            <nav className='hero__navigation'>
                <a className='hero__navigation-link' href='#about'>О проекте</a>
                <a className='hero__navigation-link' href='#tech' >Технологии</a>
                <a className='hero__navigation-link' href='#aboutme'>Студент</a>
            </nav>
        </section>
    );
}

export default Hero;