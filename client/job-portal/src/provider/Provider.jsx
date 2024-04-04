import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,  } from "firebase/auth";
import app from '../firebase/fire.config';
import { useState,useEffect } from 'react';

 export const AuthContext = createContext(null)
 

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null)
    const [loading,setLoading] = useState(true)

// carete user
    const creacteUser = (email,password) =>{

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    
    }

       // login

       const creactLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }


    // ggole login 
    // const Googlelogin = () =>{
    //     setLoading(true)
    //     return signInWithPopup(auth,goleesss)
    // }

// observe auth state change 

useEffect(()=>{
    const unsubscibe = onAuthStateChanged(auth,currentuser =>{
        // console.log('current value is observe this current user',currentuser)
        
        console.log('user is observee' ,currentuser)
        setuser(currentuser)
    })

    return() =>{
        unsubscibe()
    }
},[])




    const userinfo = {
        user,
        creacteUser,
        creactLogin,
        loading,
        logout
    }
    return (
        <AuthContext.Provider value={userinfo}>
             {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;