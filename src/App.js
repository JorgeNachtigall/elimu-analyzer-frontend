import {
  Switch, Route, Redirect
} from 'react-router-dom';
import React, { Component } from 'react';
import Login from './components/Login';
import Main from './components/Main';
import Fire from './config/Fire';
import { Loader, Dimmer } from 'semantic-ui-react';
import localStorage from 'local-storage';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoggedIn: false,
      loading: true
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user && this.state.isLoggedIn) {
        this.setState({
          user: null,
          isLoggedIn: false,
          loading: false
        });
      }
      else if (user && !this.state.isLoggedIn) {
        if (!localStorage.get(user.uid)) {
          localStorage.set(user.uid, true);
        }
        this.setState({
          user: user,
          isLoggedIn: true,
          loading: false
        });
      }
      else {
        this.setState({
          user: null,
          isLoggedIn: false,
          loading: false
        })
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => {
          if (this.state.isLoggedIn) { return <Main /> }
          else { return <Redirect to='/login' /> }
        }
        } />

        <Route exact path='/main' render={() => {
          if (this.state.loading) {
            return (<Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>)
          }
          else if (this.state.isLoggedIn) { return <Main /> }
          else { return <Redirect to='/login' /> }
        }
        } />

        <Route exact path='/login' render={() => {
          if (this.state.isLoggedIn) { return <Redirect to='/main' /> }
          else { return <Login /> }
        }
        } />
      </Switch>
    )
  }
}

export default App;