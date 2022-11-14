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
                            <input
                                id='name'
                                name='name'
                                autoComplete='off'
                                minLength='3'
                                maxLength='30'
                                type='text'
                                required
                            />
                        </li>

                        <li className='profile__about-item'>
                            <p className='profile__data'>
                                <span className='profile__data-span'>E-mail</span>
                            </p>
                            <input
                                id='email'
                                name='email'
                                className='profile__data'

                                autoComplete='off'
                                minLength='3'
                                maxLength='30'
                                type='email'
                                required
                            />
                        </li>
                    </ul>

                  

                    <div className='profile__buttons'>
                      <button type='button'className='profile__button'>
                            Редактировать
                        </button>

                    
                        <button type='submit' className='profile__button' >
                            Сохранить
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