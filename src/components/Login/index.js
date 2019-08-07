import React, { Component } from 'react';
import { Header, Icon, Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import Fire from '../../config/Fire';
import './styles.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            emailSignup: '',
            passwordSignup: '',
            confirmPassword: ''
        }
    }

    login(e) {
        e.preventDefault();
        Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((data) => {

        }).catch((error) => {
            console.log(error);
        });
    }

    signUp(e) {
        let database = Fire.database();
        e.preventDefault();
        if (this.state.passwordSignup === this.state.confirmPassword) {
            let user = {
                type: 'user',
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.emailSignup
            }
            Fire.auth().createUserWithEmailAndPassword(this.state.emailSignup, this.state.passwordSignup).then(function (data) {
                let userPath = database.ref('users/' + data.user.uid);
                userPath.set(user);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div class='loginMenu'>
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
                                <Form.Input icon='user' iconPosition='left' label='E-mail' placeholder='Email' onChange={this.handleChange} value={this.state.email} name="email" />
                                <Form.Input icon='lock' iconPosition='left' label='Senha' type='password' placeholder='Senha' onChange={this.handleChange} value={this.state.password} name="password" />
                                <Button content='Login' onClick={this.login} primary />
                            </Form>
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle'>
                            <p>Cadastre-se</p>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Nome' placeholder='First name' onChange={this.handleChange} value={this.state.firstName} name="firstName" />
                                    <Form.Input fluid label='Sobrenome' placeholder='Last name' onChange={this.handleChange} value={this.state.lastName} name="lastName" />
                                </Form.Group>
                                <Form.Input label='E-mail' placeholder='Email' onChange={this.handleChange} value={this.state.emailSignup} name="emailSignup" />
                                <Form.Input label='Senha' type='password' placeholder='Senha' onChange={this.handleChange} value={this.state.passwordSignup} name="passwordSignup" />
                                <Form.Input label='Confirme sua senha' type='password' placeholder='Confirme sua senha' onChange={this.handleChange} value={this.state.confirmPassword} name="confirmPassword" />
                                <Button content='Registre-se' onClick={this.signUp} primary />

                            </Form>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Ou</Divider>
                </Segment>
            </div>
        );
    }
}

export default Login;