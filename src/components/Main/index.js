import React, { useEffect, useState } from 'react';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Content from '../Content';
import Fire from '../../config/Fire';
import { withRouter } from 'react-router-dom';
import './style.css';

function Main(props) {
    const [menuOption, setMenuOption] = useState(0);

    useEffect(() => {
        if (!Fire.getCurrentUsername()) {
            alert('not logged');
            props.history.replace('/login');
        }
    });

    function output(evt) {
        setMenuOption(evt);
    }

    return (
        <div>
            <div class='wrapper'>
                <Sidebar func={output} />
                <div class='wrapper-right'>
                    <Topbar />
                    <Content menuOption={menuOption} />
                </div>
            </div>
        </div>
    );
}

export default withRouter(Main);