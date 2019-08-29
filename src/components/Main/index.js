import React, { useEffect, useState } from 'react';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Content from '../Content';
import './style.css';

export default function Main() {
    const [menuOption, setMenuOption] = useState(0);

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