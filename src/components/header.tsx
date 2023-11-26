import React from 'react'
import {auth, logoutUser} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
  // data
  const [user, loading, error] : [any, boolean, any]  = useAuthState(auth);

  // Logout user
  const logOutUser = async () => {
    let response = await logoutUser()
  }
  return (
    <header className='pb-10'>
        <img alt="truetalk" className='float-left' src={require("../assets/header.png")} />

        {user ?
          <div className="header-dropdown m4-5 hover">
            <img alt="truetalk" className='float-left profile-header-img rounded-full' src={user?.photoURL}/>
            <div className="dropdown-content mt-8" onClick={logOutUser}>
              <p className='text-red-500 text-sm'>Logout</p>
            </div>
          </div>
          :
          <Link to={'/login'}><span className='text-sm text-default float-right'>Sign in</span></Link>
        }
    </header>
  )
}
