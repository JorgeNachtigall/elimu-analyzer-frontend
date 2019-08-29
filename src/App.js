import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Main from './components/Main';
import Fire from './config/Fire';
import { Loader, Dimmer } from 'semantic-ui-react';
import localStorage from 'local-storage';
import './App.css';
import { app } from 'firebase';

function App() {

  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => authListener());

  function authListener() {
    Fire.auth().onAuthStateChanged((data) => {
      if (data && isLoggedIn) {
        setUser(null);
        setLoggedIn(false);
        setLoading(false);
      }
      else if (data && !isLoggedIn) {
        if (!localStorage.get(data.uid)) {
          localStorage.set(data.uid, true);
        }
        setUser(data);
        setLoggedIn(true);
        setLoading(false);
      }
      else {
        setUser(null);
        setLoggedIn(false);
        setLoading(false);
      }
    });
  }

  function requireAuth(nextState, replace){
    if(!isLoggedIn){
      replace({ pathname: '/login' })
    }
  }

  return (
    <Route path="/" component={Login}>
      <Route path="login" component={Login} />
      <Route path="main" component={Main} onEnter={requireAuth}/>
    </Route>
  );

  /*return (
    <Switch>
      <Route exact path='/' render={() => {
        if (isLoggedIn) { return <Main /> }
        else { return <Redirect to='/login' /> }
      }
      } />

      <Route exact path='/main' render={() => {
        if (loading) {
          return (<Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>)
        }
        else if (isLoggedIn) { return <Main /> }
        else { return <Redirect to='/login' /> }
      }
      } />

      <Route exact path='/login' render={() => {
        if (isLoggedIn) { return <Redirect to='/main' /> }
        else { return <Login /> }
      }
      } />
    </Switch>
  );*/
  
}

export default App;