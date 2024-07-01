import React, {useState} from "react";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import {NewUserContext} from "./components/hooks/NewUserContext";

const App = () => {
  const [newUser, setNewUser] = useState(null)
  return (
    <NewUserContext.Provider value={{newUser, setNewUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </NewUserContext.Provider>
  );
};

export default App;
