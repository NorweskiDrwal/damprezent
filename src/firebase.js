import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBu_1vPINhf51iu5kOsCBJPOM0HktFMO7E",
  authDomain: "dam-prezent.firebaseapp.com",
  databaseURL: "https://dam-prezent.firebaseio.com",
  projectId: "dam-prezent",
  storageBucket: "dam-prezent.appspot.com",
  messagingSenderId: "854524612471"
};
firebase.initializeApp(config);

export default firebase;
