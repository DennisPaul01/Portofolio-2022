//Brings in the core functionality
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

// This bring in the firestoare functionality

import "firebase/auth";
import "firebase/firestore";

//TODO: asta nu are trebuie sa fie aici

const firebaseConfig = {
  apiKey: "AIzaSyCmyzFmmSyMyvHnht3A_Q6ZPoYKu6FpC-g",
  authDomain: "protofolio-c84fe.firebaseapp.com",
  databaseURL: "https://protofolio-c84fe-default-rtdb.firebaseio.com",
  projectId: "protofolio-c84fe",
  storageBucket: "protofolio-c84fe.appspot.com",
  messagingSenderId: "188272789940",
  appId: "1:188272789940:web:de5d75809a8e49ae970ae1",
};

// Debbuging daca am uitat sa adaugam confing
if (!firebaseConfig.apiKey) throw new Error("Missing fire config: apiKey");
if (!firebaseConfig.authDomain)
  throw new Error("Missing fire config: authDomain");
if (!firebaseConfig.projectId)
  throw new Error("Missing fire config: projectId");
if (!firebaseConfig.storageBucket)
  throw new Error("Missing fire config: storageBucket");
if (!firebaseConfig.messagingSenderId)
  throw new Error("Missing fire config: messagingSenderId");
if (!firebaseConfig.appId) throw new Error("Missing fire config: appId");

firebase.initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
