import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAZKokmaMOkzkgwsxkehz7pBbMIvkcWB9s",
  authDomain: "footnet-1af47.firebaseapp.com",
  projectId: "footnet-1af47",
  storageBucket: "footnet-1af47.appspot.com",
  messagingSenderId: "454784377896",
  appId: "1:454784377896:web:b39260c8f02ebd9ee7811d",
  measurementId: "G-WRQCPHN54P"
};
let firebaseApp;
if (!getApps().length)
  firebaseApp = initializeApp(firebaseConfig);
else
  firebaseApp = getApp();
deleteApp(firebaseApp);
firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
getStorage(firebaseApp);
export {
  auth as a
};
