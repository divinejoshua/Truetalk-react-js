import React from 'react'
import userSVG from "../assets/user.svg";

export default function MessageCard() {
  return (
     <div className='message-card shadow-md border mt-5 py-6 px-4'>
        <div className='profile-card flex'>
            <img alt="truetalk" src={userSVG}  width={30}/>
            <div className='text-xs ml-3 text-gray-500'>
                <p className='font-bold'>Anon User</p>
                <p className='mt-1'>8:26 pm • 6 Nov 2023</p>
            </div>
        </div>
        <div className='message-body mt-4 font-bold text-gray-700'>
            <p>I am only doing this for the fun of it i dont like you enough to try this hard but when i see you i think otherwise.</p>
        </div>
        <img alt="truetalk" src={require("../assets/header.png")} width={60} className='mt-6 opacity-50' />
    </div>
  )
}
