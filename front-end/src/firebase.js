import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBRKUoy171YO33YqNOW2Ln7l_83XYQLwsg",
	authDomain: "my-first-project-2f7b2.firebaseapp.com",
	projectId: "my-first-project-2f7b2",
	storageBucket: "my-first-project-2f7b2.appspot.com",
	messagingSenderId: "1078425328595",
	appId: "1:1078425328595:web:b81ec153c576219d666d26",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
