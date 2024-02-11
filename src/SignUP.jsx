import React, { useState } from 'react';
import './SignUP.css'

const SignUP = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('')
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  return (
    <div className="signup-container">
  <h2>Sign Up</h2>
  {errorMessage && <div className="error-message">{errorMessage}</div>}
  
  <label className="form-group">
    Email:
    <input type="email" className="input" onChange={(e) => setEmail(e.target.value)} />
  </label>
  <br />
  <label className="form-group">
    Password:
    <input type="password" className="input" onChange={(e) => setPassword(e.target.value)} />
  </label>
  <br />
  <label className="form-group">
    Verify Password:
    <input type="password" className="input" onChange={(e) => setVerifyPassword(e.target.value)} />
  </label>
  <br />
  <label className="form-group">
    Username:
    <input type="text" className="input" onChange={(e) => setUsername(e.target.value)} />
  </label>
  <br />
  <button className="button" onClick={() => props.createUser(email, password, username, setErrorMessage, verifyPassword)} type="submit">Sign Up</button>
</div>
  )
}

export default SignUP