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
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    //createUser With email and password
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //signInUser
    const LogIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Google LogIn
    const googleLogIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    //LogOut
    const LogOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

      // onAuthStateChange
      useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo={
        user,
        loading,
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


