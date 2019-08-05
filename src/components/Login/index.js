import React, { Component, Fragment } from 'react';
import { Header, Icon, Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';

class Login extends Component {
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
                                <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Email' />
                                <Form.Input icon='lock' iconPosition='left' label='Password' type='password' placeholder='Senha' />
                                <Button content='Login' primary />
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