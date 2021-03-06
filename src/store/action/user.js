import {getFirestore, doc, setDoc, collection, getDocs, getDoc  } from "firebase/firestore"; 
import {getStorage, ref, getDownloadURL} from 'firebase/storage';
export const EDIT_USER = 'EDIT_USER'
export const SET_USER = "SET_USER"
export const SET_USERS = 'SET_USERS'
export const ADD_TASK = "ADD_TASK"
export const fecthUsers = () => {
    return async (dispatch) => {
        // any async code you want!
              
        const db = getFirestore()
    
        const loadedUsers= [];
        
        const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            loadedUsers.push({
                id: doc.id,
                name: doc.data().name,
                profileImage: doc.data().profileImage,
                description: doc.data().description,
                })
            
        })
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
        
        try {
            dispatch({
                type: SET_USER,
                userId: userId,
                name: docRef.data().name,
                profileImage: docRef.data().profileImage,
                description: docRef.data().description,
              });
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export const updateUser = user => {
    return async (dispatch) => {
        // any async code you want!
        console.log(user)     
        const db = getFirestore()
            
        await setDoc(doc(db, "users", user.userId), {
            name: user.name,
            profileImage: user,
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
            description: user.description,
          });
        }    
}

const UploadImage = async(uid, uri) => {
    const storage = getStorage(); 
    const reference = ref(storage, uid)
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
    const snapshot = await reference.put(blob);
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
    
    
    blob.close();
    const imgUrl = await snapshot.ref.getDownloadURL();
    return imgUrl;
}

export const addTask = task => {
  return async (dispatch, getState) => {
    dispatch({
      type: ADD_TASK,
      task: task
    })
  }
}