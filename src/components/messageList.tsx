import React from 'react'
import MessageCard from './messageCard'

export default function MessageList() {
  return (
    <div className='message-list'>
      <MessageCard/>
      <MessageCard/>
      <MessageCard/>
      <MessageCard/>
    </div>
  )
}
