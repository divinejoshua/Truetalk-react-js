import React from 'react'
import {auth, signInWithGooglePopup, logoutUser } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

export default function LoginPage() {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        // console.log(response);
    }

    const [user, loading, error] : [any, boolean, any]  = useAuthState(auth);


  return (
    <div>
       <div className='login-screen'>
        <img alt="truetalk" className='' width={100} src={require("../assets/header.png")} />
      </div>
         {/* <div>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            <button onClick={logoutUser}>Sign Out</button>
        </div>

        <p>{user?.uid}</p> */}
    </div>
  )
}
