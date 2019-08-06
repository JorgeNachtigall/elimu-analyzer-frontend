import {
  BrowserRouter as Router, Route, Redirect
} from 'react-router-dom';
import React, { Fragment, Component } from 'react';
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

    const isLoggedIn = this.state.isLoggedIn;
    let screen;

    if (isLoggedIn) {
      screen = <Main />

    } else {
      screen = <div class='loginMenu'> <Login /> </div>
    }

    /*

    {this.state.user ? (<Main />) : (
            <div class='loginMenu'>
              
            </div>
          )}

    */
    return (
      <Router >
        <Fragment>
          {screen}
        </Fragment>
      </Router >
    );
  }
}

export default App;