import React from 'react'
const Signup = props => {
    const { onLogin } = props.auth;
    return(
        <div>
            <h1>Signup</h1>
            <button type="button" onClick={onLogin}>
                Signup
            </button>
        </div>
    )
  }
export default Signup