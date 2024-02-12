import React, { useState } from 'react'
import './Login.css'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  return (
    <div className="container login-container">
      <h2>Login</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="form-group">
        <label>Email</label>
        <input className="input" type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input className="input" type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="button" onClick={() => { props.signIn(email, password, setErrorMessage) }}>Login</button>
      <p class="message">You don't have an Account?</p>
      <a class="signUp-link" >Sign up</a>
      
    </div>
)
  
}

export default Login