import React, { Component } from 'react';
import './styles.css';
import defaultUser from '../../img/default-user.png';
import Fire from '../../config/Fire.js'
import { getUserFirstName } from '../../utils';

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.setName = this.setName.bind(this);
        this.state = {
            user: ''
        }
    }

    setName() {
        Fire.auth().currentUser.getIdToken(true).then(idToken => {
            getUserFirstName(idToken).then(response => {
                this.setState({ user: response.data });
                console.log(this.state.user);
            });
        });
    }

    componentDidMount() {
        this.setName();
    }

    render() {
        return (
            <div class='topbar'>
                <a href='#home'>Testando</a>
                <a href='#home'>Testando</a>
                <a href='#home'>Testando</a>
                <a href='#home'>Testando</a>
                <div class='divideer'></div>
                <a href='#user'>{this.state.user}</a>
                <div class='userImage'>
                    <img src={defaultUser} alt="User name" class="ui avatar image" />
                </div>
            </div>
        );
    }
}

export default Topbar;