import React, { Component } from 'react';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Content from '../Content';
import './style.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.output = this.output.bind(this);
        this.state = {
            menuOption: 0
        }
    }

    render

    output = (evt) => {
        this.setState({ menuOption: evt });
    }

    render() {
        return (
            <div>
                <div class='wrapper'>
                    <Sidebar func={this.output} />
                    <div class='wrapper-right'>
                        <Topbar />
                        <Content menuOption={this.state.menuOption} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;