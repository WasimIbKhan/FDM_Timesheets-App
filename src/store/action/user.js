const EDIT_USER = 'EDIT_USER'
const SET_USER = 'SET_USER'
const SET_USERS = 'SET_USERS'

import {getFirestore, doc, setDoc, collection, getDocs  } from "firebase/firestore"; 

export const fecthUsers = () => {
    return async (dispatch) => {
        // any async code you want!
        
        const userId = getState().auth.userId;
      
        const db = getFirestore()
    
        const loadedUsers= [];
        
        const querySnapshot = await getDocs(collection(db, "cities"));
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            loadedUsers.push({
                id: doc.id,
                name: doc.data().name
                })
            
        });
          dispatch({
            type: SET_USERS,
            users: loadedUsers
          });
        }    
}

export const fecthUser = userId => {
    return async (dispatch) => {
        // any async code you want!
              
        const db = getFirestore()
            
        const docRef = await getDoc(doc(db, "users", userId))
        console.log(docRef.data())
          dispatch({
            type: SET_USER,
            userId: userId,
            name: docRef.date().name,
            profileImage: docRef.date().profileImage,
            description: docRef.date().description,
          });
        }    
}

export const updateUser = user => {
    return async (dispatch) => {
        // any async code you want!
              
        const db = getFirestore()
            
        await setDoc(doc(db, "users", user.userId), {
            name: user.name,
            profileImage: user.profileImage,
            description: user.description
          }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
          });

          dispatch({
            type: EDIT_USER,
            userId: user.userId,
            name: user.name,
            profileImage: user.profileImage,
            description: duser.description,
          });
        }    
}