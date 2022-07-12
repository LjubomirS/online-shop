import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
 } from "firebase/auth"
 import {  
    getFirestore,
    doc,
    getDoc,
    setDoc,
 } from 'firebase/firestore'

//!-------------------------------------------------------------

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDq528QvT3d-68ZzdhNX_LIjJE-JZquTxE",
    authDomain: "ztm-online-store-db.firebaseapp.com",
    projectId: "ztm-online-store-db",
    storageBucket: "ztm-online-store-db.appspot.com",
    messagingSenderId: "160122244853",
    appId: "1:160122244853:web:90f73b6826866b0bbd3fbc"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

//!-------------------------------------------------------------

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

//!-------------------------------------------------------------

  export const auth = getAuth();

//!-------------------------------------------------------------

  export const signInWithGooglePopup = ()=> signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth, googleProvider);

//!-------------------------------------------------------------

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) => {

    if(!userAuth) return;

    const userDocRef = doc(db,'users',userAuth.uid)
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // if user data does not exist
        
    if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        })
      }catch(error){
        console.log('error creating the user', error.message);
      }

      }

      return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
  }