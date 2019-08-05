import React, { Component, Fragment } from 'react';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Content from '../Content';
import './style.css';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <div class='wrapper'>
                    <Sidebar />
                    <div class='wrapper-right'>
                        <Topbar />
                        <Content />
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default Main;