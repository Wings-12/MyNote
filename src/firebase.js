import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxDwHd8144CiYaV_RzXCnxogmptP9U7rM",
  authDomain: "mynote-4bbfd.firebaseapp.com",
  projectId: "mynote-4bbfd",
  storageBucket: "mynote-4bbfd.appspot.com",
  messagingSenderId: "555327039413",
  appId: "1:555327039413:web:c56f7fc4f45d2451809bfc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
