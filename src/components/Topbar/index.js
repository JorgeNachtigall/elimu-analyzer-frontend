import React, { useEffect, useState } from 'react';
import './styles.css';
import { withRouter } from 'react-router-dom';
import defaultUser from '../../img/default-user.png';
import Fire from '../../config/Fire.js'

function Topbar(props) {

    const [user, setUser] = useState('');

    useEffect(() => {
        setUser(Fire.getCurrentUsername());
    }, []);

    return (
        <div class='topbar'>
            <a href='/home'>Testando</a>
            <a href='/home'>Testando</a>
            <a href='/home'>Testando</a>
            <a href='/turmas'>Testando</a>
            <div class='divideer'></div>
            <a href='#user'>{user}</a>
            <div class='userImage'>
                <img src={defaultUser} alt="User name" class="ui avatar image" />
            </div>
        </div>
    );
}

export default withRouter(Topbar);