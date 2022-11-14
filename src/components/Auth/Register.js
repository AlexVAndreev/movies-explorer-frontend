import React from 'react';
import {Link} from 'react-router-dom';

import './Auth.css';
import './Profile.css';
import logo from '../../images/logo.svg';

function Register(isLoggedIn) {
    return (
        <main className='auth'>
            <header className='auth__header'>
                <Link to='/'><img src={logo} alt='logo' className='auth__logo'/></Link>
                <h1 className='auth__title'>Добро пожаловать!</h1>
            </header>

            <form className='auth__form' onSubmit=''>
                <div className='auth-input'>
                    <p className='auth-input__text'>Имя</p>
                    <input
                        id='name'
                        name='name'
                        className='auth-input__input'
                        minLength='3'
                        maxLength='30'
                        type='text' required
                    />
                </div>

                <div className='auth-input'>
                    <p className='auth-input__text'>E-mail</p>
                    <input
                        id='email'
                        name='email'
                        className='auth-input__input'
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        type='email' required
                    />
                </div>

                <div className='auth-input'>
                    <p className='auth-input__text'>Пароль</p>
                    <input
                        id='password'
                        name='password'
                        className='auth-input__input'
                        minLength='3'
                        maxLength='30'
                        type='password' required
                    />
                </div>

            </form>
            <button className='auth-button'>Зарегистрироваться</button>
            <Link to='/sign-in' className='auth__link'>Уже зарегистрированы?
                <span className='auth__link-span'>Войти</span>
            </Link>
        </main>
    );
}

export default Register;