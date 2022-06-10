import { useContext,createContext,useEffect, useState } from "react";
import { GoogleAuthProvider,onAuthStateChanged,signInWithPopup } from "firebase/auth";

import {auth} from "../Firebase"
const AuthContext=createContext();

export const AuthContextProvider=({children})=>{

    const [user,setUser]=useState({});    
    
    const googleSignIn=()=>{
            const provider=new GoogleAuthProvider();
            signInWithPopup(auth,provider);
        }

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })

    return ()=>{ unsubscribe();}
},[])

        return(
            <AuthContext.Provider value={{googleSignIn}}>
                {children}
            </AuthContext.Provider>
        )
}

export const UserAuth=()=>{
    return useContext(AuthContext);
}