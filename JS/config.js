
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore-compat.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsfTnuupyQeaJXAUlrKvDUxVCEpWme98w",
  authDomain: "lbb-jsi03-89c5a.firebaseapp.com",
  projectId: "lbb-jsi03-89c5a",
  storageBucket: "lbb-jsi03-89c5a.firebasestorage.app",
  messagingSenderId: "1041410016149",
  appId: "1:1041410016149:web:f2329209974018e4df2c9c",
  measurementId: "G-DLGBE1WVT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth}

// export {db}