import './App.css';

import {Route, Switch} from 'react-router-dom';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Auth/Profile';
import Login from '../Auth/Login';
import Register from '../Auth/Register'
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="root">
      <Switch>
        <Route exact path='/'>
        <Main />
        </Route>
        <Route path='/movies'>
        <Movies />
        </Route>
        <Route path='/saved-movies'>
        <SavedMovies/>
        </Route>
        <Route path='/profile'>
        <Profile/>
        </Route>
        <Route path='/sign-in'>
        <Login/>
        </Route>
        <Route path='/sign-up'>
        <Register/>
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
