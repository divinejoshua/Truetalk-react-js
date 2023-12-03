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
import firebase from '../utils/firebase';
import IMessageBody from '../interface/message.interface';
import {v4 as uuidv4} from 'uuid';
import Lottie from 'react-lottie';
import emptyMessageAnimation from '../assets/nomessage_animation.json';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../utils/firebase'

export default function MessageList() {
  const colletionRef = collection(firebase, 'messages');
  const [user] : [any, boolean, any]  = useAuthState(auth);
  const [messageList, setmessageList] = useState<IMessageBody[]>([])
  const [isLoading, setisLoading] = useState<boolean>(true)

  const emptyMessagesAnimationsOptions = {
    loop: true,
    autoplay: true,
    animationData: emptyMessageAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  useEffect(() => {

    // console.log(uuidv4())

    let userId = user ? user.uid : "0000"

    // Query Statement
    const queryClause = query(
      colletionRef,
      where('receiver', '==', userId),
      orderBy("receiver", "desc"),
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
    <>
      <div className='message-bar py-4 text-gray-500 border-y'>
        <h5 className='text-sm'>All messages &nbsp;•&nbsp;&nbsp;&nbsp;{messageList.length}</h5>
      </div>

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
              <div className='mt-10'>
                <center>
                  <Lottie
                    options={emptyMessagesAnimationsOptions}
                    // height={200}
                    width={150}
                  />
                  <p className='mt-5 text-gray-500'>You currently have no messages</p>
                </center>
              </div>
        }

      </div>
    </>
  )
}
