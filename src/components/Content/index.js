import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';
import Fire from '../../config/Fire';
import Realtime from '../Realtime';

function Content(props) {

    const [menuOption, setMenuOption] = useState(1);

    async function logout() {
        await Fire.logout();
        props.history.push('/');
        console.log('oi');
    }

    if (menuOption === 0) {
        return (
            <div class='content'>
                <Realtime />
            </div>
        );
    }
    else if (menuOption === 1) {
        return (
            <div class="content">
                <button onClick={logout}> OUTRA OPÇÃO </button>
            </div>
        );
    }
}

export default withRouter(Content);