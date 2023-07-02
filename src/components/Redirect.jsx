import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Redirect() {

    const cred=localStorage.getItem('isLogged');
    const navigate = useNavigate();
    useEffect(() => {
        if(cred){
            navigate('/Messages');
            console.log("Redirected");
        }else{
            navigate('/SignIn');
        }
    }, [])
  return (
    <div>

    </div>
  )
}

export default Redirect
