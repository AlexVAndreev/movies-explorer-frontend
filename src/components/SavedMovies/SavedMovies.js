import React from 'react';

import './SavedMovies.css';
import '../movies/Movies.css';

import SearchForm from '../Common/Form';
import MoviesCardList from '../movies/MoviesCardList';
import Preloader from "../Common/Preloader";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import CheckBox from '../Common/Checkbox'
const SavedMovies = ({isLoggedIn}) => {

   isLoggedIn=true;
    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <main className='saved-movies page-wrapper'>
                <SearchForm/>
                {/* <Preloader/> */}
                <CheckBox />
                <MoviesCardList/>
            </main>
            <Footer/>
        </>
    );
};

export default SavedMovies;