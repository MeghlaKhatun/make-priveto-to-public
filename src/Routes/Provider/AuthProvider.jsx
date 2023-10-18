import { createContext, useEffect } from "react";
import {  useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState()

    //createUser With email and password
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //signInUser
    const LogIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Google LogIn
    const googleLogIn=()=>{
        return signInWithPopup(auth,provider)
    }

    //LogOut
    const LogOut=()=>{
        return signOut(auth)
    }

      // onAuthStateChange
      useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo={
        user,
       createUser,
      LogIn,
      googleLogIn,
      LogOut,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node,
};
export default AuthProvider;


