import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCb-q1ZskhGcpJikx7TpSXOu86NzS7SfD0",
    authDomain: "wegolf-f0b29.firebaseapp.com",
    projectId: "wegolf-f0b29",
    storageBucket: "wegolf-f0b29.appspot.com",
    messagingSenderId: "379740021103",
    appId: "1:379740021103:web:ee7a7a23b148d20bda889a"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase