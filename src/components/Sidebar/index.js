import React, { Component } from 'react';
import './styles.css';

class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="sidebar">
                <a class="logo" href="#" onClick={this.handleClick}><i class="fa fa-fw fa-line-chart"></i> <span><b>Elimu Analyzer</b></span></a>
                <div class="ui divider"></div>
                <a class="active" href="#home" onClick={(evt) => this.props.func(0)}><i class="fa fa-fw fa-home"></i> <span>Inicio</span></a>
                <div class="ui divider"></div>
                <a href="#services" onClick={(evt) => this.props.func(1)}><i class="fa fa-fw fa-eye"></i> <span>Tempo Real</span></a>
                <div class="ui divider"></div>
                <a href="#services"><i class="fa fa-fw fa-history"></i> <span>Interações</span></a>
                <div class="ui divider"></div>
                <a href="#clients"><i class="fa fa-fw fa-graduation-cap"></i> <span>Gerenciar Turmas</span></a>
                <div class="ui divider"></div>
                <a href="#contact"><i class="fa fa-fw fa-bar-chart"></i> <span>Estatísticas</span></a>
            </div>
        );
    }
}

export default Sidebar;