import React, { Component } from 'react';
import './styles.css';
import Fire from '../../config/Fire';

class Content extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            menu: 0
        }
    }

    logout() {
        //Fire.auth().signOut();
        this.setState({ menu: 1 });
        console.log(this.props.estado.valor);
    }

    render() {
        if (this.state.menu === 0) {
            return (
                <div class="content">
                    <button onClick={this.logout}> Logout </button>
                </div>
            );
        } else {
            return (
                <div class="content">
                    <button onClick={this.logout}> niko </button>
                </div>
            );
        }
    }
}

export default Content;