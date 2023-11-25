import React, { useState } from 'react'
import HeaderComponent from '../components/Header'
import userSVG from "../assets/user.svg"

export default function SendMessagePage() {
  //Data
  const [maxLength, setmaxLength] = useState<number>(140)
  const [messageBody, setmessageBody] = useState<string>("")
  return (
    <main className='main'>
      {/* Header component  */}
      <HeaderComponent/>
      <div className='p-3'>

        {/* Message card  */}
        <div className='message-card shadow-md border mt-5 py-6 px-4'>
          <div className='profile-card flex'>
              <img alt="truetalk" src={userSVG}  width={30}/>
              <div className='text-xs ml-3 text-gray-500'>
                  <p className='font-bold'>Erin Or</p>
                  <p className='mt-1'>Tell me what’s on your mind.</p>
              </div>
          </div>

          <div className='message-body mt-5 font-bold text-gray-700'>
            <textarea
            onChange={e => setmessageBody(e.target.value)}
            className='w-full border rounded p-3
            focus:outline-none focus:border-default
            focus:ring-default
            focus:ring-1
            focus:border-100
            transition duration-0 hover:duration-150' maxLength={maxLength} rows={4} autoFocus placeholder="Write a message to Erin..."></textarea>
            <p className='text-xs text-gray-500 mt-4 float-right'>{messageBody.length} / {maxLength}</p>
          </div>
          <img alt="truetalk" src={require("../assets/header.png")} width={60} className='mt-8 opacity-50' />
        </div>

        <center>
            <button className='btn flex place-content-center mt-10 bg-default text-white px-20 py-2 rounded-full font-bold drop-shadow'>
              Send message
            </button>
        </center>

        {/* After message is sent */}
        <div className='mt-20'>
          <center>
            <p className='font-bold text-gray-500'>Get your own link and receive messages from your friends!</p>
            <button className='btn flex place-content-center mt-7 bg-default text-white px-20 py-2 rounded-full font-bold drop-shadow'>
              Get yours
            </button>
          </center>
        </div>

      </div>

    </main>
  )
}
