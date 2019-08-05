import {
    BrowserRouter as Redirect
} from 'react-router-dom';
import React, { Component } from 'react';
import './styles.css';
import Fire from '../../config/Fire';

class Main extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        Fire.auth().signOut();
    }

    render() {
        return (
            <div class="content">
                <button onClick={this.logout}> Logout </button>
                <Redirect to="/" />
            </div>
        );
    }
}

export default Main;