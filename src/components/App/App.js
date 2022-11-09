// import logo from './logo.svg';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import Main from '../Main/Main'

function App() {
  return (
    <div className="root">
      <Switch>
        <Route path='/'>
        <Main />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
