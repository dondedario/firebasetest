// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKzjfj9piAMi0zGwLoz8p0SIVrmaZQxVo",
  authDomain: "nngameguidez-7e09b.firebaseapp.com",
  projectId: "nngameguidez-7e09b",
  //storageBucket: "nngameguidez-7e09b.appspot.com",
  //messagingSenderId: "801079412738",
  appId: "1:801079412738:web:363073a56f15372248bf1b",
  measurementId: "G-CSZ25D7GZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

//detect auth state
onAuthStateChanged(auth, user => {
    if (user !== null) {
        console.log('logged in')
    }
    else {
        console.log('no user')
    }
})

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get email & password
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    //sign up user
    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        console.log(cred.user.email)
    })
})
