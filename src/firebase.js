import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAVYvXQuau3KI47tj2yBCTbk6aYHvMY38I',
  authDomain: 'slack-clone-joe.firebaseapp.com',
  projectId: 'slack-clone-joe',
  storageBucket: 'slack-clone-joe.appspot.com',
  messagingSenderId: '126561694605',
  appId: '1:126561694605:web:e1a3600734e8744f63c3c4',
  measurementId: 'G-9CPFQQNCRR',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
