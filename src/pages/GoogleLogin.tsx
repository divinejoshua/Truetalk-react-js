import React, { useEffect, useRef, useState } from 'react'
import {auth, signInWithGooglePopup } from '../utils/firebase'
import { createSearchParams, redirect, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function GoogleLoginPage() {
    // Use navigate
    const navigate = useNavigate();

    // Data
    const [email, setemail] = useState();
    const [fullname, setfullname] = useState("")

        // Login user
    const logGoogleUser = async () => {
        try{
        let response : any = await signInWithGooglePopup();
            setemail(response.user.email)
            setfullname(response.user.displayName)
        }
        catch{
        }
    }

  //   Redirect the user if logged in
  useEffect(() => {
    if(email){
      const queryParameters = new URLSearchParams(window.location.search)
      const redirectUrl = queryParameters.get("redirectUrl")
      window.location.href = `${redirectUrl}?email=${email}&fullname=${fullname}`;
        // navigate({
        //     pathname: "/auth/google",
        //     search: createSearchParams({
        //         email: email,
        //         fullname: fullname
        //     }).toString()
        // });
    }
      // eslint-disable-next-line
  }, [email]);

  return (
    <button onClick={logGoogleUser} >Login with google</button>
  )
}
