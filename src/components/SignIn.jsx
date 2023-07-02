import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SignIn() {
  const [UserName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const handleSignIn = () => {
    localStorage.setItem('isLogged', true);
    console.log(UserName,Email,Password);
    // axios.put('https://suman2mandal-studious-tribble-j49q47rxv9v3p7vq-3000.preview.app.github.dev/putUser',{name:UserName,email:Email,password:Password})
    axios.get("https://suman2mandal-studious-tribble-j49q47rxv9v3p7vq-3000.preview.app.github.dev/");
    navigate('/Messages');
  }
  const handleSignUp = () => {
  }
  return (
    <div>
      <input type="text" onChange={e => setUserName(e.target.value)} name="UserName" placeholder='Name' id="" />
      <input type="text" onChange={e => setEmail(e.target.value)} name="Email" placeholder='Email' id="" />
      <input type="password" onChange={e => setPassword(e.target.value)} name="password" placeholder='password' id="" />
      <input type="button" onClick={handleSignIn} value="Sign In" />
      <input type="button" onClick={handleSignUp} value="Sign Up" />
    </div>
  )
}

export default SignIn
