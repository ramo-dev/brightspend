import React, { useEffect, useState } from "react";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import { NewUserContext } from "./components/hooks/NewUserContext";
import PageNotFound from "./routes/PageNotFound";
import Loader from "./components/ui/Loader";

const App = () => {
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer)
  }, []);
  return (
    <NewUserContext.Provider value={{ newUser, setNewUser }}>
      <BrowserRouter>
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    </NewUserContext.Provider>
  );
};

export default App;
