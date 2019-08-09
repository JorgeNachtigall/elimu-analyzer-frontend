import React, { Component, Fragment } from 'react';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Content from '../Content';
import './style.css';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valor: 50
        }
    }
    render() {
        return (
            <Fragment>
                <div class='wrapper'>
                    <Sidebar />
                    <div class='wrapper-right'>
                        <Topbar />
                        <Content estado={this.state} />
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default Main;