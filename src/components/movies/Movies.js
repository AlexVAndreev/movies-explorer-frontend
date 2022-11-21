import React from "react";

import "./Movies.css";
import Checkbox from "../Common/Checkbox";
import Header from "../Common/Header";
import Form from "../Common/Form";
import Footer from "../Common/Footer";
import Preloader from "../Common/Preloader";
import MoviesCardList from "./MoviesCardList";

const Movies = ({
  movies,
  setMovies,
  savedMovies,
  setSavedMovies,
  searchMovie,
  setSearchError,
  handleToggleCheckbox,
  inputError,
  searchError,
  preloader,
  isLoggedIn,
}) => {
  React.useEffect(() => {
    const searchResult = localStorage.getItem("search");
    if (
      searchResult &&
      searchResult !== "undefined" &&
      JSON.parse(searchResult).length > 0
    ) {
      setMovies(JSON.parse(searchResult));
    }
  }, [setMovies]);

  React.useEffect(() => {
    setSearchError(false);
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Form
        searchMovie={searchMovie}
        inputError={inputError}
        inputText={localStorage.getItem("searchText")}
      />
      {preloader && <Preloader />}

      <Checkbox handleToggleCheckBox={handleToggleCheckbox} />

      <h2
        className={
          searchError
            ? "movies__search-error"
            : "movies__search-error movies__search-error-hidden"
        }
      >
        Ничего не найдено!
      </h2>

      {movies ? (
        <MoviesCardList
          movies={movies}
          setMovies={setMovies}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
        />
      ) : null}
      <Footer />
    </>
  );
};

export default Movies;
