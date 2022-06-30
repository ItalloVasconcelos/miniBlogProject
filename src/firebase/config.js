import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAy2dKc3uSiUdl9e4UaZBg8ejzXVG3C0zE",
  authDomain: "miniblog-4389e.firebaseapp.com",
  projectId: "miniblog-4389e",
  storageBucket: "miniblog-4389e.appspot.com",
  messagingSenderId: "1073309134469",
  appId: "1:1073309134469:web:1c9b038580748073f183ec"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };