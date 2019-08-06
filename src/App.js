import {
  Switch, Route, Redirect
} from 'react-router-dom';
import React, { Component } from 'react';
import Login from './components/Login';
import Main from './components/Main';
import Fire from './config/Fire';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoggedIn: false
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
          isLoggedIn: false
        });
      }
      else if (user && !this.state.isLoggedIn) {
        this.setState({
          user: user,
          isLoggedIn: true
        });
      }
      else {
        this.setState({
          user: null,
          isLoggedIn: false
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
        }} />

        <Route exact path='/main' render={() => {
          if (this.state.isLoggedIn) { return <Main /> }
          else { return <Redirect to='/login' /> }
        }} />

        <Route exact path='/login' render={() => {
          if (this.state.isLoggedIn) { return <Redirect to='/main' /> }
          else { return <Login /> }
        }} />
      </Switch>
    )
  }
}

export default App;