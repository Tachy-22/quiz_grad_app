// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXQNctB6KJJAkW13t3i-7RNgX-pdQuFyQ",
  authDomain: "quiz-grad-project.firebaseapp.com",
  projectId: "quiz-grad-project",
  storageBucket: "quiz-grad-project.appspot.com",
  messagingSenderId: "1063555880864",
  appId: "1:1063555880864:web:636408881b9dc3a7cd76c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
