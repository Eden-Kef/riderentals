import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBNT8kiMQnsQJXyCuYI0KPCGiOPw5I6yuE",
    authDomain: "car-rental-16813.firebaseapp.com",
    projectId: "car-rental-16813",
    storageBucket: "car-rental-16813.appspot.com",
    messagingSenderId: "464223676589",
    appId: "1:464223676589:web:7eaffb96465305bacd7e24",
    measurementId: "G-JC5ET4DWFV"
  }; 
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app); 
  export const storage = getStorage(app);
