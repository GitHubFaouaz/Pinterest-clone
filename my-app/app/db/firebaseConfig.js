import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSQG-klblsRjVWivW1BHnHZewK39pa1vQ",
  authDomain: "cloner-pinterest.firebaseapp.com",
  projectId: "cloner-pinterest",
  storageBucket: "cloner-pinterest.appspot.com",
  messagingSenderId: "920588345629",
  appId: "1:920588345629:web:3c3a29585d6fa41aa081f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// creation de la db(firestoreDatabase)  et le storage (storage) sur le site
