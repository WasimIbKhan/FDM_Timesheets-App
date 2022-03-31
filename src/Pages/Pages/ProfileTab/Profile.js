import React from 'react'
import { Link } from 'react-router-dom';
import {
    Outlet
  } from 'react-router-dom';
function Profile() {
    console.log('here!')
    return (
        <div style={{ padding: 20 }}>
            <h1>This is where your going to style the profile UI</h1>
          <Link to="edit-profile">Edit Profile</Link>
        </div>
      );
}

export default Profile