import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Messages() {

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('isLogged');
    navigate('/SignIn');
  }
  const [post, setPost] = React.useState(null);
  // const baseURL = 'localhost:8000';
  
  // axios.get(baseURL+"/api").then((response) => {setPost(response.data)})
  // return (
  //   <div>
  //     {post ? post.map((post) => <div key={post.id}>{post.message}</div>) : null}
  //   </div>
  // )
  return (<div>
    <input type="button" onClick={handleLogOut} value="Log Out" />
  </div>)
}

export default Messages
