import React, { useEffect } from "react";
import "./App.css";
import { account } from "./firebase/Config";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Dashboard from "./routes/Dashboard";

const App = () => {
  useEffect(()=>{
    console.log(account)
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
        <Route path="/dashboard" Component={Dashboard}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
