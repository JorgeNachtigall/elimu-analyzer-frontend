import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBiXcJkO5KSNp2P7fMb_2sR9DMy8IAr6jA",
    authDomain: "elimu-analyzer.firebaseapp.com",
    databaseURL: "https://elimu-analyzer.firebaseio.com",
    projectId: "elimu-analyzer",
    storageBucket: "elimu-analyzer.appspot.com",
    messagingSenderId: "672410713380",
    appId: "1:672410713380:web:8ea632620b437bf0"
}

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.signOut();
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

}

export default new Firebase();