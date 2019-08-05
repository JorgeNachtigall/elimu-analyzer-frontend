import React, { Component } from 'react';
import './styles.css';
import defaultUser from '../../img/default-user.png'

class Topbar extends Component {
    render() {
        return (
            <div class='topbar'>
                <a href='#home'>Testando</a>
                <a href='#home'>Testando</a>
                <a href='#home'>Testando</a>
                <a href='#home'>Testando</a>
                <div class='divideer'></div>
                <a href='#user'>Username</a>
                <div class='userImage'>
                    <img src={defaultUser} alt="User name" class="ui avatar image" />
                </div>
            </div>
        );
    }
}

export default Topbar;