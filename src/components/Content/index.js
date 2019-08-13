import React, { Component } from 'react';
import './styles.css';
import Fire from '../../config/Fire';
import Realtime from '../Realtime';

class Main extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        Fire.auth().signOut();
    }

    controlContent = () => {

    }

    render() {
        if (this.props.menuOption === 0) {
            return (
                <div class='content'>
                    <Realtime />
                </div>
            );
        }
        else if (this.props.menuOption === 1) {
            return (
                <div class="content">
                    <button onClick={this.logout}> OUTRA OPÇÃO </button>
                </div>
            );
        }

    }
}

export default Main;