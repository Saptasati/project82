import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAPmIM9mwNxPku3E2Uk0lz2nU54if3kM2Y",
  authDomain: "e-ride-app-321f9.firebaseapp.com",
  projectId: "e-ride-app-321f9",
  storageBucket: "e-ride-app-321f9.appspot.com",
  messagingSenderId: "227826404838",
  appId: "1:227826404838:web:666c12a4f15f5ee5aeda27"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
