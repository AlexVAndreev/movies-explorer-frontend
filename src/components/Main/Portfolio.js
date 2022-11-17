import React from 'react';

import './Portfolio.css';
import linkPointer from '../../images/link_pointer.svg';

function portfolio() {
    return (
        <section className='portfolio'>
        <h4 className='portfolio__header'>Портфолио</h4>
        <ul className='portfolio__list'>
                    <li className='portfolio__item'>
                  
                        <a className='portfolio-item_link' href='https://github.com/AlexVAndreev/how-to-learn' target='_blank'>  <p className='portfolio__item-title'>Статичный сайт</p> <img className='portfolio-img' src={linkPointer} alt='link' /></a>
                    </li>
                    <li className='portfolio__item'>
                    <a className='portfolio-item_link' href='https://github.com/AlexVAndreev/russian-travel' target='_blank'><p className='portfolio__item-title'>Адаптивный сайт</p><img className='portfolio-img' src={linkPointer} alt='link' /></a>
                    </li>
                    <li className='portfolio__item'>
                    <a className='portfolio-item_link' href='https://github.com/AlexVAndreev/react-mesto-auth' target='_blank'><p className='portfolio__item-title'>Одностраничное приложение</p><img className='portfolio-img' src={linkPointer} alt='link' />
                    </a>
                    </li>
                </ul>

        </section>

    );
}

export default portfolio;