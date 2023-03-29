import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtGWHpy3_eS5odvZ11IR51uLmTDGb39Uk",
  authDomain: "brightdata-14145.firebaseapp.com",
  projectId: "brightdata-14145",
  storageBucket: "brightdata-14145.appspot.com",
  messagingSenderId: "795328864130",
  appId: "1:795328864130:web:6d1ec47af84c06fe9c399b"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
