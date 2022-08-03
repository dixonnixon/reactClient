
import { config } from './config';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


const app = initializeApp(config);
const auth = getAuth(app);

const db = getFirestore(app);

onAuthStateChanged(auth, user => { 
    console.log(user);
 });


// Get a list of cities from your database
async function getSishes(db) {
  const citiesCol = collection(db, 'dishes');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}