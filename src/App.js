import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
import React, { Fragment } from 'react';
import Login from './components/Login';
import Main from './components/Main';
import './App.css';

const App = () => (
  <Router >
    <Fragment>

      <div class='loginMenu'>
        <Route exact path="/" component={Login} />
      </div>

      <Route exact path="/main" component={Main} />

    </Fragment>

  </Router >
);

export default App;