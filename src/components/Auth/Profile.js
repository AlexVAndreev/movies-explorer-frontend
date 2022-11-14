import React from 'react';

import './Profile.css';
import Header from "../Common/Header";


const Profile = ({isLoggedIn}) => {
    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <main className='profile'>
                <h1 className='profile__title'>Привет, Алекс!</h1>

                <form className='profile__form' >
                    <ul className='profile__about-list'>
                        <li className='profile__about-item'>
                            <p className='profile__data'>
                                <span className='profile__data-span'>Имя</span>
                            </p>
                           <p className='profile__input'>
                            Алекс
                           </p>
                        </li>

                        <li className='profile__about-item'>
                            <p className='profile__data'>
                                <span className='profile__data-span'>E-mail</span>
                            </p>
                      <p className='profile__input'>
                        awa3awa@yandex.ru
                      </p>
                        </li>
                    </ul>
                    <div className='profile__buttons'>
                      <button type='button'className='profile__button'>
                            Редактировать
                        </button>
                        <button onClick='' className='profile__button profile__button_exit'>
                            Выйти из аккаунта
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
};

export default Profile;