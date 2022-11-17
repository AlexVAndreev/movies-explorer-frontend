
import React from 'react';
import { Link } from "react-router-dom";

import './AccButton.css';
import img from '../../images/profile.svg';

const AccountButton = () => {
    return (
        <Link to='/profile' className='account-button'>
                <p className='account-button__text'>Аккаунт</p>
                <img alt='Click' src={img} className='account-button__img'/>
        </Link>
    );
};

export default AccountButton;