import { useContext, createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, db } from '../firebase'; 
import {setDoc, doc} from "firebase/firestore"

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    const signIn = (email, password) => {
         createUserWithEmailAndPassword(auth, email, password)
         setDoc(doc(db, 'users', email), {
            savedProperty: []
         })  
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    return (
        <AuthContext.Provider value={{logIn, signIn, user, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}