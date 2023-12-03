import { useEffect, useState } from "react";
import IUser from "../interface/user.interface";
import firebase from '../utils/firebase';
import {
    doc,
    onSnapshot,
    setDoc,
    collection,
    query,
    where,
  } from 'firebase/firestore';

const useUser = (user : any) => {

    // STATES
    const colletionRef = collection(firebase, 'users');
    const [userDetails, setuserDetails] = useState<IUser>({})

    const findUserById = async (user :any) : Promise<void> =>{

        // Query Statement
        const queryClause = query(
            colletionRef,
            where('id', '==', user.uid),
        );
        let userData : any = {}

        // Get user details from database
        onSnapshot(queryClause, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setuserDetails(doc.data())
                userData = doc.data()
            });

              // Create user if non exist
              if(!userData.id){
                createNewUser(user)
            }
        });
        return
    }

    const createNewUser = async (user : any) =>{
        let newUser : IUser = {
            id: user.uid,
            email : user.email,
            fullname : user.displayName,
            profile_image : user.photoURL
        };

        try {
            const schoolRef = doc(colletionRef, newUser.id);
            await setDoc(schoolRef, newUser);
            } catch (error) {
            console.error(error);
        }
        return
    }

    return { findUserById, createNewUser, userDetails };
}

export default useUser;