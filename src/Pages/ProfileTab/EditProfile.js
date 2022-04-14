import React,{useState, useCallback} from "react";
import "./EditProfile.css";
import {Link, useNavigate } from 'react-router-dom';
import * as userAction from '../../store/action/user'
import { useDispatch, useSelector } from 'react-redux';
import './EditProfile.css'

function EditProfile() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const userId = useSelector(state => state.user.userId)
  const name = useSelector(state => state.user.name)
  const profileImage = useSelector(state => state.user.profileImage)
  const description = useSelector(state => state.user.description)
  const [file, setFile] = useState(profileImage);
  const [editName, setEditName] = useState()
  const [editDescription, setEditDescription] = useState()
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  const submitEdition = useCallback(async() => {
    console.log(editName)
    await dispatch(userAction.updateUser({
      userId: userId,
      name: editName,
      profileImage: file,
      description: editDescription
    }))
    navigate(-1)
  },[dispatch, userId, editName, file, editDescription])

  return (
    <div className="App">
       <div className="Card">
        <div className="upper-container">
          <div className="image-container">
            <img
              src={file}
              alt=" "
              height="100px"
              width="100px"
              class="cropped-image"
            />
            <input type="file" onChange={handleChange} />
          </div>
        </div>
        <div className="lower-container">
          <input name={name} onChange={event => setEditName(event.target.value)}/>
          <input name={description} onChange={event => setEditDescription(event.target.value)}/>
          <input type="submit" onClick={submitEdition} />
        </div>
      </div>
    </div>

  );
}

export default EditProfile;
