import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Card from './Components/Card';
function Profile() {
  const [name,setName] = useState('Your Name');
  const [job,setJob] = useState('Job Title');
  const [about,setAbout] = useState('Worked Since');
    return (
      <div className='App'>
        <Card name={name} job={job} about={about}/>
      </div>
      );
}

export default Profile