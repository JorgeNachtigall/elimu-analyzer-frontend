import React, { useEffect, useState } from 'react';
import { Header, Icon, Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import Fire from '../../config/Fire';
import './styles.css';

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailSignup, setEmailSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function login(e) {
        e.preventDefault();
        Fire.auth().signInWithEmailAndPassword(email, password).then((data) => {

        }).catch((error) => {
            console.log(error);
        });
    }

    function signUp(e) {
        let database = Fire.database();
        e.preventDefault();
        if (passwordSignup === confirmPassword) {
            let user = {
                type: 'user',
                firstName: firstName,
                lastName: lastName,
                email: emailSignup
            }
            Fire.auth().createUserWithEmailAndPassword(emailSignup, passwordSignup).then(function (data) {
                let userPath = database.ref('users/' + data.user.uid);
                userPath.set(user);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

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
                            <Form.Input icon='user' iconPosition='left' label='E-mail' placeholder='Email' onChange={e => setEmail(e.target.value)} value={email} name="email" />
                            <Form.Input icon='lock' iconPosition='left' label='Senha' type='password' placeholder='Senha' onChange={e => setPassword(e.target.value)} value={password} name="password" />
                            <Button content='Login' onClick={login} primary />
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <p>Cadastre-se</p>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Nome' placeholder='First name' onChange={e => setFirstName(e.target.value)} value={firstName} name="firstName" />
                                <Form.Input fluid label='Sobrenome' placeholder='Last name' onChange={e => setLastName(e.target.value)} value={lastName} name="lastName" />
                            </Form.Group>
                            <Form.Input label='E-mail' placeholder='Email' onChange={e => setEmailSignup(e.target.value)} value={emailSignup} name="emailSignup" />
                            <Form.Input label='Senha' type='password' placeholder='Senha' onChange={e => setPasswordSignup(e.target.value)} value={passwordSignup} name="passwordSignup" />
                            <Form.Input label='Confirme sua senha' type='password' placeholder='Confirme sua senha' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} name="confirmPassword" />
                            <Button content='Registre-se' onClick={signUp} primary />

                        </Form>
                    </Grid.Column>
                </Grid>
                <Divider vertical>Ou</Divider>
            </Segment>
        </div>
        );
}