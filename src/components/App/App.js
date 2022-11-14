// import logo from './logo.svg';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import Main from '../Main/Main'
import Movies from '../movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

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
        </Switch>
    </div>
  );
}

export default App;
