import app from 'firebase/app';  
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDu2cg8mD6hfEUXT1yA_9ijWvYZisU7Wso",
    authDomain: "react-firebase-68027.firebaseapp.com",
    databaseURL: "https://react-firebase-68027.firebaseio.com",
    projectId: "react-firebase-68027",
    storageBucket: "react-firebase-68027.appspot.com",
    messagingSenderId: "246468063722",
    appId: "1:246468063722:web:04ba74c70d125e611c4293"
};
  
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // ** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  
  // *** User API ***

  user = uid => this.db.ref(`user/${uid}`);

  users = () => this.db.ref(`users`);
}

export default Firebase;