import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHe_P0o0fjrck6fDKw6NPC269_osw3GEU",
  authDomain: "ogspotify-63cec.firebaseapp.com",
  projectId: "ogspotify-63cec",
  storageBucket: "ogspotify-63cec.firebasestorage.app",
  messagingSenderId: "684907663802",
  appId: "1:684907663802:web:eab88baaf6bde98b5a0d83",
  measurementId: "G-JJMEP7D8H1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);