import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyA7Xn_kdr3M_kag0KOEDXwEn6COKj_zMp0",
  authDomain: "club-charter.firebaseapp.com",
  projectId: "club-charter",
  storageBucket: "club-charter.appspot.com",
  messagingSenderId: "791735066229",
  appId: "1:791735066229:web:670e542f7ca1ea4ea9a23c",
};

const app = initializeApp(firebaseConfig);
let db = getFirestore(app);



async function readData() {
  const querySnapshot = await getDocs(collection(db, "Members"));
  var user = [];
  querySnapshot.forEach((doc) => {
    user = doc.data();
    console.log(user)
  })
}

readData();