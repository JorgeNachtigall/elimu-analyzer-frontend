import React, { Component, Fragment } from 'react';
import { Header, Icon, Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import Fire from '../../config/Fire';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Fragment>
                <Header as='h2' icon inverted textAlign='center'>
                    <Icon name='users' />
                    Scratch Analyzer
                    <Header.Subheader>Administre e realize análises de suas turmas de Scratch.</Header.Subheader>
                </Header>

                <Segment placeholder size='big'>
                    <Grid columns={2} textAlign='center' stackable>
                        <Grid.Column>
                            <p>Faça login em sua conta</p>
                            <Form>
                                <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Email' onChange={this.handleChange} value={this.state.email} name="email" />
                                <Form.Input icon='lock' iconPosition='left' label='Password' type='password' placeholder='Senha' onChange={this.handleChange} value={this.state.password} name="password" />
                                <Button content='Login' onClick={this.login} primary />
                            </Form>
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle'>
                            <Button content='Inscreva-se' icon='signup' size='big' />
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Ou</Divider>
                </Segment>
            </Fragment>
        );
    }
}

export default Login;