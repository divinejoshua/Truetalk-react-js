import React, { useEffect, useRef, useState } from 'react'
import {auth, signInWithMicrosoftPopup } from '../utils/micosoft'
import { createSearchParams, redirect, useNavigate } from 'react-router-dom';
// import googleBtnSvg from "../assets/socials/google.svg";

export default function MicrosoftLoginPage() {
    // Use navigate
    const navigate = useNavigate();

    // Data
    const [email, setemail] = useState();
    const [fullname, setfullname] = useState("")

        // Login user
    const logGoogleUser = async () => {
        try{
        let response : any = await signInWithMicrosoftPopup();
            // setemail(response.user.email)
            // setfullname(response.user.displayName)
        }
        catch{
        }
    }


  return (
    <div className='center-page'>
      <center>
          <button onClick={logGoogleUser} className='btn flex place-content-center mt-7 bg-default text-white py-2 px-2 rounded-full font-bold drop-shadow'>
              {/* <img alt="truetalk" src={googleBtnSvg} width={32}/> */}
              <span className='ml-5 mt-1 mr-5'>Login with Microsoft</span>
          </button>
      </center>
    </div>
  )
}
