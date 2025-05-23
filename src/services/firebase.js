import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0CvyqRkN4A_1k3WtizbDq_gfWtDNb1zA",
  authDomain: "budgetbulder.firebaseapp.com",
  projectId: "budgetbulder",
  storageBucket: "budgetbulder.firebasestorage.app",
  messagingSenderId: "795917252135",
  appId: "1:795917252135:web:1dcd9d24148de7c0964002",
  measurementId: "G-9VV8KPK9M3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
