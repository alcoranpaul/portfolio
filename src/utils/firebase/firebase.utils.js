/*
 * File: firebase.utils.js
 * Project: portfolio
 * File Created: Wednesday, 28th June 2023 11:33:13 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 5:01:12 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { initializeApp } from 'firebase/app';
import {
    getAuth,            // get auth instance
    signInWithRedirect, // sign in with redirect
    signInWithPopup,    // sign in with popup
    GoogleAuthProvider, // google auth provider
    signOut,            // sign out
    onAuthStateChanged  // listen to auth state changes
} from 'firebase/auth';

import {
    getFirestore,   // get firestore instance 
    doc,            // create a document reference
    getDoc,         // read data from firestore
    setDoc,         // write data to firestore
    collection,     // create a collection reference
    query,          // create a query
    getDocs,        // read data from firestore
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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


class AdminAuthError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'AdminAuthError';
    }
}

export const db_Firestore = getFirestore();


/** Create user document from authentication object
 * this is for creating more than one admin account
 * @param {*} userAuth - user authentication object from firebase
 * @returns {Promise} - promise that resolves to user document reference
 */
export const createUserDocumentFromAuth = async (userAuth) => {
    // Database, Collection, Document
    const userDocRef = doc(db_Firestore, "admin_user", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const lastLogin = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                lastLogin
            });
        }
        catch (error) {
            console.log("Error creating user", error.message);
        }
    }
    console.log("SignIn successful")

    return userDocRef;
}

/** Sign in admin user
 * 
 * @param {*} userAuth - user authentication object from firebase
 * @returns {Promise} - promise that resolves to user snapshot
 */
export const signInAdmin = async (userAuth) => {
    console.log("Fetching data from database")
    const userDocRef = doc(db_Firestore, "admin_user", userAuth.uid); // Reference of document from firebase
    const userSnapshot = await getDoc(userDocRef); // Get document data from firebase

    if (!userSnapshot.exists()) {
        throw new AdminAuthError(`Unauthorized user has no admin privileges`, 401);
    }

    return userSnapshot;
}

/** Sign out admin user
 * 
 * @returns {Promise} - promise that resolves to void
 */
export const signOutAdmin = async () => await signOut(auth)

/**
 * 
 * @param {*} callback - callback function to be called when auth state changes
 * @returns {Function} - unsubscribe function
 */
export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback)

/** Get current user
 * 
 * @returns {Promise} - promise that resolves to current user
 */
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            unsubscribe(); // unsubscribe to prevent memory leaks
            resolve(userAuth);
        }, reject);
    })
};

//*********************************************** Database ***************************************//
//************************************************************************************************//

export const COLLECTION_TYPE = {
    projects: "projects",
    skills: "skills",
    works: "works"
}


/** Get collection from firestore based on collection type
 * 
 * @param {*} collectionType - type of collection to get
 * @returns {Object} - collection data
 */
export const getCollection = async (collectionType) => {
    try {
        console.log(`getCollection -- getting collection ${collectionType}`)
        if (COLLECTION_TYPE[collectionType] === undefined) throw new Error("Invalid collection type");
        const collectionSnapshot = collection(db_Firestore, collectionType);
        const q = query(collectionSnapshot);
        const querySnapshot = await getDocs(q);

        const collectionData = querySnapshot.docs.reduce((acc, doc) => {
            const { id } = doc;
            const data = doc.data();
            return { ...acc, [id]: data }
        }, {});

        return collectionData;
    }
    catch (error) {
        console.log(`Error in getCollection`)
        console.log(error);
    }
}