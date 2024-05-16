import { useEffect, useState } from "react";
import Navbar from "../components/Navigation/Navigation";
import Transaction from "../components/Transaction/Transaction";
import { useNavigate } from "react-router-dom";
import { account } from "../firebase/Config";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if there is a User
  useEffect(() => {
    const unsubscribe = account.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  //  they are Signed in On Mount navigate
  return (
    <section>
      <Navbar />
      <div style={{ padding: "5rem 1rem" }}>
        <Transaction />
      </div>
    </section>
  );
};

export default Dashboard;
