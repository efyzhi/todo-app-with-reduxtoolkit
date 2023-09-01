import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCCd1hG0GKQLpR4onbCVCM7akD5j04-LGE",
  authDomain: "taskmgt-b8107.firebaseapp.com",
  projectId: "taskmgt-b8107",
  storageBucket: "taskmgt-b8107.appspot.com",
  messagingSenderId: "566131037991",
  appId: "1:566131037991:web:c4e1d09f46d1034dd23b02"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)