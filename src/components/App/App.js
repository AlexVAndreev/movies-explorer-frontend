import React from "react";
import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { currentUserContext } from "../../Context/currentUserContext";
import Main from "../Main/Main";
import Movies from "../movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Auth/Profile";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import movieApi from "../../utils/MoviesApi";
import * as mainApi from "../../utils/MainApi";

function App() {
  //сеттеры пользователя
  const [currentUser, setCurrentUser] = React.useState({ name: "", email: "" });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [loginError, setLoginError] = React.useState("");
  const [regError, setRegError] = React.useState("");
  const [hiddenInput, setHiddenInput] = React.useState(false);

  const history = useHistory();

  //сеттеры для фильмов
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [preloader, setPreloader] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);
  const [inputError, setInputError] = React.useState(false);
  const [isCheckBoxOpen, setIsCheckBoxOpen] = React.useState(false);

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      mainApi.checkToken(jwt).then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser({
            email: res.email,
            name: res.name,
          });
        }
      });
    }
  }, [isLoggedIn]);

  function signUp(email, password, name) {
    mainApi
      .register(email, password, name)
      .then((res) => {
        console.log(res);
        signIn(email, password);
        // setTimeout(history.push, 1000, "/movies");
      })
      .catch(() => {
        setRegError("пользователь уже существет!");
      });
  }

  function signIn(email, password) {
    mainApi
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          mainApi
            .checkToken(res.token)
            .then((data) => {
              setHiddenInput(true);
              setCurrentUser({ email: data.email, name: data.name });
            })
            .catch((err) => {
              console.log(err);
            });
        }
        setIsLoggedIn(true);
        setTimeout(history.push, 1000, "/movies");
      })
      .catch(() => {
        setLoginError("Пользователь не найден!");
      })
      .finally(() => setHiddenInput(false));
  }

  const signOut = () => {
    localStorage.clear();
    // localStorage.removeItem("saved");
    // setSavedMovies([]);
    setMovies([]);
    setIsLoggedIn(false);
    setHiddenInput(false);
    setIsCheckBoxOpen(false);
    history.push("/");
  };

  //поиск
  const searchMovie = (text) => {
    if (isLoggedIn) {
      const jwt = localStorage.getItem("jwt");

      if (history.location.pathname === "/movies") {
        if (!localStorage.getItem("all-movies")) {
          setPreloader(true);
          movieApi
            .getMovies()
            .then((data) => {
              console.log(data);
              setMovies(filterMovies(data, text));

              const allMovies = JSON.stringify(data);
              localStorage.setItem("all-movies", allMovies);
            })
            .catch(() => setInputError(true))
            .finally(() => setPreloader(false));
        } else {
          const searchList = JSON.parse(localStorage.getItem("all-movies"));
          setMovies(filterMovies(searchList, text));
        }
      }

      if (history.location.pathname === "/saved-movies") {
        setPreloader(true);
        mainApi
          .getSavedMovies(jwt)
          .then((res) => {
            setSavedMovies(filterMovies(res, text));
          })
          .catch(() => setSearchError(true))
          .finally(() => setPreloader(false));
      }
    }
  };

  const filterMovies = (data, text) => {
    const searchList = data.filter((movie) => {
      if (movie.nameRU.toLowerCase().includes(text.toLowerCase())) {
        if (movie.duration <= 40 && isCheckBoxOpen) {
          return movie;
        }
        if (movie.duration >= 40 && !isCheckBoxOpen) {
          return movie;
        }
        return false;
      }
      return false;
    });

    if (searchList.length === 0) {
      console.log(searchList.length);
      setSearchError(true);
      console.log(searchError);
    } else {
      setSearchError(false);
      console.log(searchError);
    }

    const searchResult = JSON.stringify(searchList);
    localStorage.setItem("search", searchResult);
    localStorage.setItem("searchText", text);
    return searchList;
  };

  React.useEffect(() => {
    if (localStorage.getItem("saved")) {
      setSavedMovies(JSON.parse(localStorage.getItem("saved")));
    }
  }, [history]);

  // React.useEffect(() => {
  //   if (isLoggedIn) {
  //     if (!localStorage.getItem("saved")) {
  //       mainApi
  //         .getSavedMovies(localStorage.getItem("jwt"))
  //         .then((res) => {
  //           setSavedMovies(res);
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   }
  // }, [savedMovies, history]);

  React.useEffect(() => {
    if (isLoggedIn) {
      if (localStorage.getItem("search")) {
        setIsCheckBoxOpen(localStorage.getItem("checkBox"));
        setMovies(localStorage.getItem("search"));
      }
    }
  }, [history]);

  React.useEffect(() => {
    if (savedMovies) {
      localStorage.setItem("saved", JSON.stringify(savedMovies));
    }
  }, [savedMovies]);

  // search
  const handleToggleCheckbox = () => {
    setIsCheckBoxOpen(!isCheckBoxOpen);
  };
  return (
    <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="root">
        <Switch>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} />
          </Route>

          <Route path="/sign-in">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login
                loginError={loginError}
                setLoginError={setLoginError}
                hiddenInput={hiddenInput}
                signIn={signIn}
              />
            )}
          </Route>

          <Route path="/sign-up">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <Register
                signUp={signUp}
                regError={regError}
                setRegError={setRegError}
              />
            )}
          </Route>

          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            signOut={signOut}
          />

          <ProtectedRoute
            path="/movies"
            isLoggedIn={isLoggedIn}
            component={Movies}
            movies={movies}
            setMovies={setMovies}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            searchMovie={searchMovie}
            handleToggleCheckbox={handleToggleCheckbox}
            searchError={searchError}
            setSearchError={setSearchError}
            inputError={inputError}
            isCheckboxOpen={isCheckBoxOpen}
            preloader={preloader}
          />

          <ProtectedRoute
            path="/saved-movies"
            isLoggedIn={isLoggedIn}
            component={SavedMovies}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            movies={movies}
            setMovies={setMovies}
            searchMovie={searchMovie}
            handleToggleCheckbox={handleToggleCheckbox}
            searchError={searchError}
            setSearchError={setSearchError}
            inputError={inputError}
            isCheckboxOpen={isCheckBoxOpen}
            preloader={preloader}
          />

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </currentUserContext.Provider>
  );
}

export default App;
