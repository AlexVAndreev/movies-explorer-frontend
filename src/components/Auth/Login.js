import React from 'react';
import {Link} from 'react-router-dom';

import './Auth.css';
import './Profile.css';
import {Validations} from '../../utils/Validations'

import logo from '../../images/logo.svg';

function Login({signIn, loginError, setLoginError, hiddenInput}) {
    const [errorMessage, setErrorMessage] = React.useState(false);

    const {
        values,
        handleChange,
        validatorErrors,
        setValidatorErrors,
        isValid,
        setIsValid
    } = Validations(setErrorMessage);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setIsValid(false);

        if (!values.email || !values.password) {
            return false;
        }
        signIn(values.email, values.password);
    }

    React.useEffect(() => {
        setLoginError('');
    }, []);

    
    return (
        <main className='auth'>
            <header className='auth__header'>
                <Link to='/'><img src={logo} alt='logo' className='auth__logo'/></Link>
                <h1 className='auth__title'>Рады видеть!</h1>
            </header>

            <form className='auth__form' onSubmit={handleSubmit}>
                <div className='auth-input'>
                    <p className='auth-input__text'>E-mail</p>
                    <input
                        id='email'
                        name='email'
                        className='auth-input__input'
                        onChange={handleChange}
                        disabled={hiddenInput}
                        value={values.email}
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        type='email' required
                    />
                </div>

                <div className='auth-input'>
                    <p className='auth-input__text'>Password</p>
                    <input
                        id='password'
                        name='password'
                        className='auth-input__input'
                        onChange={handleChange}
                        disabled={hiddenInput}
                        value={values.password}
                        minLength='3'
                        maxLength='30'
                        type='password' required
                    />
                </div>
                
                <div className='auth__message'>
                    {validatorErrors &&
                    Object.values(validatorErrors).filter((item) => item !== "").length > 0 ?
                        Object.entries(validatorErrors).map((item, ind) => {
                            if (item[1] === '') item[0] = '';
                            if (item[0] === 'email') item[0] = 'Email:';
                            if (item[0] === 'password') item[0] = 'Пароль:';
                            return (
                                <p key={ind} className='auth__message-text auth__message-text-error'>
                                    {`${item[0]} ${item[1]}`}
                                </p>
                            );
                        })
                        : ""}


                    {
                        loginError ?
                            (<p className='auth__message-text auth__message-text-error'>{loginError}</p>) : ''
                    }
                </div>


            <button className='auth-button'>Войти</button>
            
            </form>
            
            <Link to='/sign-up' className='auth__link'>Ещё не зарегистрированы?
                <span className='auth__link-span'>Регистрация</span>
            </Link>
        </main>
    );
}

export default Login;