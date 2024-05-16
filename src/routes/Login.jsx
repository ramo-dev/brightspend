import { useEffect, useState } from "react";
import LoginComponent from "../components/Login/LoginComponent";
import { Toaster } from "sonner";
import { account } from "../firebase/Config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check if there is a User
  useEffect(() => {
    const unsubscribe = account.onAuthStateChanged((user) => {
      setUser(user?.email);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //  they are Signed in On Mount navigate
  useEffect(() => {
    setTimeout(()=>{
      user && navigate("/dashboard");
    },3000)
  }, [user]);
  return (
    <>
      <Toaster richColors position="top-right" />
      <LoginComponent />
    </>
  );
};

export default Login;
