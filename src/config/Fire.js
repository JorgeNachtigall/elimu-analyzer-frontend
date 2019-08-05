import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBiXcJkO5KSNp2P7fMb_2sR9DMy8IAr6jA",
    authDomain: "elimu-analyzer.firebaseapp.com",
    databaseURL: "https://elimu-analyzer.firebaseio.com",
    projectId: "elimu-analyzer",
    storageBucket: "elimu-analyzer.appspot.com",
    messagingSenderId: "672410713380",
    appId: "1:672410713380:web:8ea632620b437bf0"
}

const fire = firebase.initializeApp(config);

export default fire;