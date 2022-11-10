
import React from 'react';

import './About.css';

import NavTab from './NavTab';

function About(props) {

    return (
        <section className='about'  id='about'>
            <NavTab text='О проекте'/>

            <div className='about__wrapper'>
                <article className='about__article'>
                    <h4 className='about__title'>Дипломный проект включал 5 этапов</h4>
                    <p className='about__paragraph'>
                        Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности и
                        финальные доработки.
                    </p>
                </article>

                <article className='about__article'>
                    <h4 className='about__title'>На выполнение диплома ушло 5 недель</h4>
                    <p className='about__paragraph'>
                        У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно
                        защититься.
                    </p>
                </article>
            </div>

            <ul className='about__stage'>
                <li className='about__stage_title'>
                    <p className='about__stage_title-item'>1 неделя</p>
                    <p className='about__stage_title-item'>4 недели</p>
                </li>
                <li className='about__stage_cell'>
                    <p className='about__stage_cell-item'>Back-end</p>
                    <p className='about__stage_cell-item'>Front-end</p>
                </li>
            </ul>
        </section>
    );
}

export default About;