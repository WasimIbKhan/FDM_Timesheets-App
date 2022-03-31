import React from 'react'
import {
    Navigate,
    useLocation
  } from 'react-router-dom';
const Login = props => {
    console.log(props.title)
    const { onLogin } = props.auth;
    const location = useLocation();
    return(
        <div>
            <h1>Login</h1>
            <button type="button" onClick={onLogin}>
                Login
            </button>
            <button type="button" onClick={<Navigate to="/signup" replace state={{ from: location }} />}>
                Sign Up
            </button>
        </div>
    )
  }

export default Login