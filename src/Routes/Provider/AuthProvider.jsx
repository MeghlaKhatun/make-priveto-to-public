import { createContext } from "react";
// import {  useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    // const [user,setUser]=useState()

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


    const authInfo={
        // user,
       createUser,
      LogIn,
      googleLogIn,

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


