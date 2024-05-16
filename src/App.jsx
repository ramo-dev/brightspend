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

const App = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // console.log(account)
    const subsribe = account.onAuthStateChanged((user) => {
      setUser(user);
    });

    setTimeout(()=>{
      setLoading(!loading)
    },4000)

    return () => subsribe();
  }, []);
  return (
    <BrowserRouter>
      {loading ? <Loader/> 
      : user ? (
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
