import  { useEffect, useState } from "react";
import "./App.css";
import { account } from "./firebase/Config";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Dashboard from "./routes/Dashboard";
import Loader from "./components/Ui/Loader";
import PageNotFound from "./routes/PageNotFound";
import ChatComponent from "./components/Chat/ChatComponent";
import ComingSoon from "./components/ComingSoon/ComingSoon";

const App = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let authStateChangedTimeout; // Variable to hold the timeout reference
  
    const unsubscribe = account.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); // Setting loading to false after setUser has been called
      clearTimeout(authStateChangedTimeout); // Clearing the timeout if onAuthStateChanged is invoked
    });
  
    authStateChangedTimeout = setTimeout(() => {
      setLoading(false);
    }, 4000);
  
    return () => {
      unsubscribe();
      clearTimeout(authStateChangedTimeout); // Clear the timeout on cleanup
    };
  }, []);

  useEffect(()=>{
    async function wakeUpServer(){
        try{
          const res = await fetch("https://brightspendai.onrender.com/wakeUp",
           {
            method : "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ hello: "hello world" }),
           }
          );
          const data = await res.text();
          console.log(data)
        }catch(err){
          console.error(err)
        }
    }
    wakeUpServer()
    return () => {}
  },[])
  
  return (
    <BrowserRouter>
      {/* {loading ? <Loader/> 
      : user ? (
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/dashboard/chat" Component={ChatComponent}/>
          <Route path="*" Component={PageNotFound} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      )} */}
     {loading ? <Loader/> :
      <Routes>
      <Route path="/comingsoon" Component={ComingSoon}/>
      <Route path="*" Component={ComingSoon}/>
    </Routes> 
    }
    </BrowserRouter>
  );
};

export default App;
