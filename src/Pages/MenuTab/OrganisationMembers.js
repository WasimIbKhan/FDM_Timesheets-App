import React from 'react'
import Link from 'react-router-dom'
function OrganisationMembers() {
    const BlogPosts = {
        '1': {
          name: 'Wasim',
          description: 'Is meant to work on the Schedule Tab, hes completed it as now you can add any task to the schedule'
        },
        '2': {
          name: 'Amr Khalid A Bawzeer',
          description: 'Is meant to work on the profile UI and Edit Profile UI'
        },
        '3': {
          name: 'Aadil Sayed',
          description: 'Is meant to work on the Login Page UI'
        },
        '4': {
          name: 'Haotian Chen',
          description: 'Is meant to work on the Signup page UI'
        },
        '5': {
          name: 'Santhya Kugathas',
          description: 'Is meant to work on the Menu Tab, which is suppost to be able to assign user permissions and assign group members to a line manager'
        },
        '6': {
          name: 'Naivedhya Premal Shah',
          description: 'Is meant to work on the Menu Tab, which is suppost to be able to assign user permissions and assign group members to a line manager'
        },
        '7': {
          name: 'Venkata Stripada Gayatri Sistla',
          description: 'Is meant to work on the Menu Tab, which is suppost to be able to assign user permissions and assign group members to a line manager'
        },
      };
    return (
      <div style={{ padding: 20 }}>
        <h2>Organisation Members</h2>
        <ul>
        {Object.entries(BlogPosts).map(([slug, { name }]) => (
          <li key={slug}>
            <Link to={`${slug}`}>
              <h3>{name}</h3>
            </Link>
          </li>
        ))}
        </ul>
      </div>
      
    );
  }

export default OrganisationMembers