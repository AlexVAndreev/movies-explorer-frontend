// import logo from './logo.svg';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import AboutProject from '../Main/AboutProject';

function App() {
  return (
    <div className="root">
      <Switch>
        <Route path='/'>
        <AboutProject />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
