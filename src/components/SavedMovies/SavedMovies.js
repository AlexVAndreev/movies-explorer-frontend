import React from 'react';

import './SavedMovies.css';
import '../movies/Movies.css';
import * as mainApi from '../../utils/MainApi';

import Form from '../Common/Form';
import MoviesCardList from '../movies/MoviesCardList';
import Preloader from "../Common/Preloader";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import CheckBox from '../Common/Checkbox'


const SavedMovies = ({
    setSavedMovies, savedMovies, handleToggleCheckbox, searchMovie,
    inputError, preloader, searchError, onMovieDelete, isLoggedIn, setSearchError
}) => {

    React.useEffect(() => {
        mainApi.getSavedMovies(localStorage.getItem('jwt'))
            .then((res) => {
                setSavedMovies(res);
            })
    }, []);

    React.useEffect(() => {
        setSearchError(false);
    }, []);

    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <main className='saved-movies page-wrapper'>
                <Form
                       searchMovie={searchMovie}
                       inputError={inputError}
                     />
                <CheckBox />
                <MoviesCardList setMovies={setSavedMovies} movies={savedMovies} onMovieDelete={onMovieDelete}/>
            </main>
            <Footer/>
        </>
    );
};

export default SavedMovies;