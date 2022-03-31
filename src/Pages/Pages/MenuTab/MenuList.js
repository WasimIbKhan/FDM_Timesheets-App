import { Link } from 'react-router-dom';
import {
    Outlet
  } from 'react-router-dom';
import React from 'react'
function MenuList() {
    return (
        <div>
            <Link to='organisation-members'><h2>Organisation Members</h2></Link>
            <Outlet />
        </div>
        )
    
}

export default MenuList