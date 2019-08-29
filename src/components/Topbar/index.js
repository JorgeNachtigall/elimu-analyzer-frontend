import React, { useEffect, useState } from 'react';
import './styles.css';
import defaultUser from '../../img/default-user.png';
import Fire from '../../config/Fire.js'
import { getUserFirstName } from '../../utils';

export default function Topbar(){

    const [user, setUser] = useState('');

    function setName() {
        Fire.auth().currentUser.getIdToken(true).then(idToken => {
            getUserFirstName(idToken).then(response => {
                setUser(response.data);
                console.log(user);
            });
        });
    }

    useEffect(() => setName());
        
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