import React from 'react';
import Messages from './components/Messages';
import LogOut from './components/LogOut';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Redirect from './components/Redirect';
import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const data = () => {
  axios.get('http://localhost:3030/api')
  .then((response) => {
    console.log(response.data)
  })
}
const router = createBrowserRouter([
// {
//   path: "/",
//   element: <div>{data()}</div>,
// },{
  {
  path: "/",
  element: <Redirect/>
  },{
  path: "/SignIn",
  element: <SignIn/>,
},{
  path: "/SignUp",
  element: <SignUp/>,
},
{
  path: "/Messages",
  element: <Messages/>,
},{
  path: "logOut",
  elemtent: <LogOut/>,
}
]);

function App() {
  const [text, setText] = React.useState('');

  const UpdateState = (e) => {
    setText(e.target.value);
  }

  const SendData = () => {
    setText('')
    console.log(text)
  }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
