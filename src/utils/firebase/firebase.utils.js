/*
 * File: firebase.utils.js
 * Project: portfolio
 * File Created: Wednesday, 28th June 2023 11:33:13 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 28th June 2023 1:49:12 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import {
    getFirestore,   // get firestore instance 
    doc,            // create a document reference
    getDoc,         // read data from firestore
    setDoc,         // write data to firestore
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAzsXckJ-latrAKYNSVHhUxSqSjB90DZE",
    authDomain: "portfolio-18367.firebaseapp.com",
    projectId: "portfolio-18367",
    storageBucket: "portfolio-18367.appspot.com",
    messagingSenderId: "466997284018",
    appId: "1:466997284018:web:d47b6a9005a99e477bcdab",
    measurementId: "G-Y74679YQQM"
};

//****************************************** Authentication **************************************//
//************************************************************************************************//

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//*********************************************** Database ***************************************//
//************************************************************************************************//

export const db_Firestore = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    // Database, Collection, Document
    const userDocRef = doc(db_Firestore, "admin_user", userAuth.uid);
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
            });
        }
        catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userDocRef;
}
