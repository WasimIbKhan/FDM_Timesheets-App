import {
    Outlet,
  } from 'react-router-dom';
import React from 'react'
const Login = props => {
    
    return(
        <div>
            <h1>Login</h1>
            <button type="button" onClick={props.onLogin}>
                Sign In
            </button>
            <Outlet />
        </div>
    )
}

export default Login