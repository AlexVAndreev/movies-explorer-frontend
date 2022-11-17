import React from 'react';
import {Link} from "react-router-dom";

import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <main className='not-found page-wrapper'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__subtitle'>Страница не найдена</p>

            <Link path='/' className='not-found__back'>Назад</Link>
        </main>
    );
};

export default PageNotFound;