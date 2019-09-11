import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';
import Fire from '../../config/Fire';
import Realtime from '../Realtime';

function Content(props) {

    const [menuOption, setMenuOption] = useState(0);

    async function logout() {
        await Fire.logout();
        props.history.push('/');
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
            </div>
        );
    }
}

export default withRouter(Content);