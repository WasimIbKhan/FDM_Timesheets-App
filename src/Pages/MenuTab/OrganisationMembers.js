import React from 'react'
import image from './image1.jpg';
function OrganisationMembers() {
    console.log("Hi World")
    return(
        <div>
            <h1>Members</h1>
            <img src={image} className="image" alt=""/>
        </div>
    )
}

export default OrganisationMembers
