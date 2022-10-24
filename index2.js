import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

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
      let logoutButton = document.getElementById("logout");
      console.log(logoutButton);

      logoutButton.addEventListener("click", (e) => {
        const auth = getAuth(app);
        signOut(auth)
          .then(() => {
            alert("sukses logout");
            location.href = "http://127.0.0.1:5500/index.html";
          })
          .catch((error) => {});
      });