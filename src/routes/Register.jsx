import  { useEffect, useState } from 'react'
import RegisterComponent from '../components/Register/RegisterComponent'
import { account } from '../firebase/Config';
import { Toaster } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);

  // Check if there is a User
  useEffect(()=>{
    const unsubscribe = account.onAuthStateChanged((user)=>{
      setUser(user?.email);
      
    })
    
    return () => {unsubscribe()}
  },[])

  //  if they are Signed in On Mount navigate
  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  return (
    <>
    <Toaster richColors position='top-right'/>
    <RegisterComponent/>
    </>
  )
}

export default Register