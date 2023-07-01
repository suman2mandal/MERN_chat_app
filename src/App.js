import React from 'react';
import Messages from './components/Messages';
import Text from './components/Text';
import Send from './components/Send';
import SignIn from './components/SignIn';
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
{
  path: "/",
  // element: <div>Hello world!</div>,
  element: <div>{data()}</div>,
  // render: () => {data()},
},
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
      {/* <Routes>
          <Route path="/" element={<Messages/>}></Route>
          <Route path="/login" element={<SignIn/>}></Route>
      {/* <form>
        <Text UpdateState={UpdateState} Text={text}/>
        <Send SendData={SendData}/>
      </form> */}

      {/* </Routes> */} 
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
