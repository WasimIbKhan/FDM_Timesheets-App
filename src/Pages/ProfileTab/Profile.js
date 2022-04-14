import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Components/Card';
function Profile() {
  const name = useSelector(state => state.user.name)
  const profileImage = useSelector(state => state.user.profileImage)
  const description = useSelector(state => state.user.description)
    return (
      <div className='App'>
        <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img
            src={profileImage}
            alt=" "
            height="100px"
            width="100px"
            class="cropped-image"
          />
        </div>
      </div>
      <div className="lower-container">
        <h3>{name}</h3>
        <h4>{description}</h4>
        <Link to="edit-profile">
          <button>Edit Profile</button>
        </Link>
      </div>
    </div>
      </div>
      );
}

export default Profile