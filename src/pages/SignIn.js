import React from 'react'
import {UserAuth} from "../context/AuthContext"


function SignIn() {
  const {googleSignIn} =UserAuth();

  const handleGoogleSingIn= async ()=>{
    try{
      await googleSignIn();
    }catch(error){console.log(error)}
  }
  
  return (
    
    <button onClick={handleGoogleSingIn}>Entrar com Google </button>
  )
}

export default SignIn