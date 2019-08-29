import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';

export default function Routes(){
    return(
    <BrowserRouter>
        <Route path='/' return={() => {
            if (isLoggedIn) { return <Main /> }
            else { return <Redirect to='/login' /> }
        }
        } />

        <Route exact path='/main' return={() => {
            if (loading) {
            return (<Dimmer active>
                <Loader>Loading</Loader>
            </Dimmer>)
            }
            else if (isLoggedIn) { return <Main /> }
            else { return <Redirect to='/login' /> }
        }
        } />

        <Route exact path='/login' return={() => {
            if (isLoggedIn) { <Redirect to='/main' /> }
            else { return <Login /> }
        }
        } />
      </BrowserRouter>

        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/user/:id" component={Main} />
        </BrowserRouter>
    );
}