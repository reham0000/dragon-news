// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKr7DDcXVwjni7ShUoQ-5McipYi7xsJT4",
  authDomain: "bu-news-desk.firebaseapp.com",
  projectId: "bu-news-desk",
  storageBucket: "bu-news-desk.firebasestorage.app",
  messagingSenderId: "443650425596",
  appId: "1:443650425596:web:4afd1503d2caad2a4ccd79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;