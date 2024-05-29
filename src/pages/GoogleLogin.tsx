import React, { useEffect, useRef, useState } from 'react'
import {auth, signInWithGooglePopup } from '../utils/firebase'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function GoogleLoginPage() {
    // Use navigate
    const navigate = useNavigate();

    // Use ref
    const logButtonRef : any= useRef(null);

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

  useEffect(() => {
    if (logButtonRef.current) {
        logButtonRef.current.click();
      }
  }, [])


  //   Redirect the user if logged in
  useEffect(() => {
    if(email){
        navigate({
            pathname: "/auth/google",
            search: createSearchParams({
                email: email,
                fullname: fullname
            }).toString()
        });
    }
      // eslint-disable-next-line
  }, [email]);

  return (
    <button ref={logButtonRef} onClick={logGoogleUser} >Login with google</button>
  )
}
