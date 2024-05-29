import React, { useEffect, useState } from 'react'
import {auth, signInWithGooglePopup } from '../utils/firebase'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function GoogleLoginPage() {
    // Use navigate
    const navigate = useNavigate();

    // Data
//   const [user, loading, error] : [any, boolean, any]  = useAuthState(auth);

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
    logGoogleUser()
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
    <div></div>
  )
}
