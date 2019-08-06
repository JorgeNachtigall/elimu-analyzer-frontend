import React, { Component, Fragment } from 'react';
import { Header, Icon, Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import Fire from '../../config/Fire';
import './styles.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.login.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangeSignUp = this.handleChangeSignUp.bind(this);
        this.state = {
            email: '',
            password: '',
            signUp: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    }

    login(e) {
        e.preventDefault();
        Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    signUp(e) {
        e.preventDefault();
        Fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChangeLogin(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleChangeSignUp(e) {
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
                    <Grid columns={2} textAlign='left' stackable>
                        <Grid.Column>
                            <p>Faça login em sua conta</p>
                            <Form>
                                <Form.Input icon='user' iconPosition='left' label='E-mail' placeholder='Email' onChange={this.handleChangeLogin} value={this.state.email} name="email" />
                                <Form.Input icon='lock' iconPosition='left' label='Senha' type='password' placeholder='Senha' onChange={this.handleChangeLogin} value={this.state.password} name="password" />
                                <Button content='Login' onClick={this.login} primary />
                            </Form>
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle'>
                            <p>Cadastre-se</p>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Nome' placeholder='First name' />
                                    <Form.Input fluid label='Sobrenome' placeholder='Last name' />
                                </Form.Group>
                                <Form.Input label='E-mail' placeholder='Email' onChange={this.handleChangeSignUp} value={this.state.signUp.email} name="" />
                                <Form.Input label='Senha' type='password' placeholder='Senha' onChange={this.handleChangeSignUp} value={this.state.signUp.password} />
                                <Form.Input label='Confirme sua senha' placeholder='Confirme sua senha' onChange={this.handleChangeSignUp} value={this.state.signUp.confirmPassword} />
                                <Button content='Registre-se' onClick={this.signUp} primary />

                            </Form>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Ou</Divider>
                </Segment>
            </Fragment>
        );
    }
}

export default Login;