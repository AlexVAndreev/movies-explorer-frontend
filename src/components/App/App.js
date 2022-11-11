// import logo from './logo.svg';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import Main from '../Main/Main'
import Movies from '../movies/Movies';

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
        </Switch>
    </div>
  );
}

export default App;
