import React from 'react'
import axios from 'axios';

function Messages() {
  const [post, setPost] = React.useState(null);
  const baseURL = 'localhost:8000';
  
  axios.get(baseURL+"/api").then((response) => {setPost(response.data)})
  return (
    <div>
      {post ? post.map((post) => <div key={post.id}>{post.message}</div>) : null}
    </div>
  )
}

export default Messages
