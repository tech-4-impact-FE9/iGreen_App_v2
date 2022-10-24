// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLTaQKGf-jW2GCFq-NIB57d2LEEeLsv5M",
  authDomain: "igreen-435ab.firebaseapp.com",
  projectId: "igreen-435ab",
  storageBucket: "igreen-435ab.appspot.com",
  messagingSenderId: "771957606927",
  appId: "1:771957606927:web:f031a046ffed592a54f17a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

const signupButton = document.getElementById("sign-up-btn");

signupButton.addEventListener('click', (e) =>{

    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        set(ref(database, "users/" + user.uid), {
            email: email,
            username: username,
            password: password
        })
        .then(() => {
            // Data saved successfully!
            alert('user created succesfully');
            //location.href = "http://127.0.0.1:5500/Login/login.html"
          }) 
          .catch((error) => {
            //the write failed
            alert(error);
          }); 
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
    });
});