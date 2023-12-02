import React, { useEffect, useState } from 'react'
import MessageCard from './MessageCard'
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import firebaseDb from '../utils/firebase';
import IMessageBody from '../interface/message.interface';
import {v4 as uuidv4} from 'uuid';


export default function MessageList() {
  const colletionRef = collection(firebaseDb, 'messages');

  const [messageList, setmessageList] = useState<IMessageBody[]>([])
  const [isLoading, setisLoading] = useState<boolean>(true)

  useEffect(() => {

    // console.log(uuidv4())

    // Query Statement
    const queryClause = query(
      colletionRef,
      where('receiver', '==', '2BxvyNrcwRZ8U0AmJtrJyMaxdZk2')
    );

    // Get messages from database
    const getMessages = onSnapshot(queryClause, (querySnapshot) => {
      setisLoading(true)
      const response : IMessageBody | any = [];
      querySnapshot.forEach((doc) => {
        response.push(doc.data())
      });

      setmessageList(response)
      setisLoading(false)
    });
    return () => {
      getMessages();
    };

    // eslint-disable-next-line
  }, []);


  return (
    <div className='message-list'>

        {isLoading ?
          //Skeleton Loader
          <div className="message-card shadow-md border mt-5 py-6 px-4">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-300 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-gray-300 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                    <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          // If there are messages
          : !isLoading && messageList.length > 0 ?

          // Messages
          Array.isArray(messageList) ? messageList.map((message, index) => (
            <div key={index}>
              <MessageCard key={message.messageId} {...message}/>
            </div>
          )) : ''

          :

          //No messages available
          "No messages available"
       }

    </div>
  )
}
