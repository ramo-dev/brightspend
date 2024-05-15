import React from "react";
import "./App.css";
import Transaction from "./assets/components/Transaction/Transaction";
import Navbar from "./assets/components/Navigation/Navigation";

const App = () => {
  return (
    <section>
      <Navbar />
      <div style={{ padding: "5rem 1rem" }}>
        <Transaction />
      </div>
    </section>
  );
};

export default App;
