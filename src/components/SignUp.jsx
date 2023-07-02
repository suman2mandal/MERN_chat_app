import React from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/SignIn');
  }
  const handleSignUp = () => {
    localStorage.setItem('isLogged', true);
    localStorage.setItem('UserName', 'Siddharth')
    navigate('/Messages');
  }
  return (
    <div>
    <form onSubmit={handleSignIn} method="post">      
        <input type="text" name="UserName" placeholder='Name' id="" />
        <input type="text" name="Email" placeholder='Email' id="" />
        <input type="password" name="password" placeholder='password' id="" />
        <button type="submit">Sign Up</button>
        <input type="button" onClick={handleSignIn} value="Sign Up" />
    </form>
    </div>
  )
}

export default SignUp
