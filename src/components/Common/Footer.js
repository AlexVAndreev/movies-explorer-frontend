import React from 'react';

import './Footer.css';

function Footer({ ref }) {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__wrapper'>
                <p className='footer__date'>© 2022</p>
                <div className='footer_link-wrapper'>
                <a className='footer__link' href='https://praktikum.yandex.ru/'>Яндекс.Практикум</a>
                <a className='footer__link' href='https://github.com/'>GitHub</a>
                </div>
            </div>
        </footer>

    );
}

export default Footer;