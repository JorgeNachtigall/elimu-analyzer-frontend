import React, { useEffect, useState } from 'react';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Content from '../Content';
import Fire from '../../config/Fire';
import { withRouter } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';
import './style.css';

function Main(props) {
    const [menuOption, setMenuOption] = useState(0);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (!Fire.getCurrentUsername()) {
            alert('not logged');
            props.history.replace('/login');
        }
        setIsLogged(true);
    });

    function output(evt) {
        setMenuOption(evt);
    }

    if (!isLogged) {
        return (
            <Dimmer active>
                <Loader>Loading</Loader>
            </Dimmer>
        );
    } else {
        return (
            <div>
                <div class='wrapper'>
                    <div class='sidebar'>
                        <Sidebar func={output} />
                    </div>
                    <div class='wrapper-right'>
                        <Topbar />
                        <Content menuOption={menuOption} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);