import Fire from './config/Fire';
import api from './api';

export function getIdToken() {
    return Fire.auth().currentUser.getIdToken(true).then((idToken) => {
        return idToken;
    });
}

export function getUserFirstName(idToken) {
    return api.get('users/' + Fire.auth().currentUser.uid + '/firstName.json?auth=' + idToken)
}