import React from 'react'
import axios from 'axios'
import SignUP from './SignUP'

const App = () => {
  // function to create user used in the lifting up to state to the component SignUP 
  const createUser=(email,password,username,setErrorMessage,verifyPassword)=>{
    if (password !== verifyPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }
    axios.post(`http://localhost:8000/signUp`,{
      email:email,
      password:password,
      username:username,
      token:'test'

    }).then((res)=>{
      console.log(res)
      if(res.data==="email used"){
        setErrorMessage("Email already exist")
      }
      else if(res.data==="password not valid"){
        let errorMessage='Password must '
        if(!/\d/.test(password)){
          errorMessage+='have a number '
        }
        if(!/[a-z]/.test(password)){
          errorMessage+='have a lowercase letter '
        }
        if(!/[A-Z]/.test(password)){
          errorMessage+='have an uppercase letter '
        }
        if(!/[!@#$%^&*]/.test(password)){
          errorMessage+='have an charachtere '
        }
        if(password.length<8){
          errorMessage+='be at least 8 characters long '
        }
        setErrorMessage(errorMessage)
      }
     else {
      setErrorMessage('good')// here delete this and change view to the sign in component
     }
    })
    .catch((err)=>{console.log(err)})
  }
  return (
    
      <SignUP createUser={createUser}/>
    
  )
}

export default App
