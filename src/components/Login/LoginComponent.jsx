import { useState } from "react";
import GoogleLogo from "../../assets/googleLogo.png";
import { LoadingOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import BackButton from "../Ui/Back";
import "./LoginStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../../firebase/Config";
import { toast } from "sonner";
import signInWithGoogle from "../../utils/SignInWithGoogle";

const LoginComponent = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [logginIn, setLogginIn] = useState(false);
  const navigate = useNavigate()

  async function handleLoginWithEmailandPassword() {
    try {
      await signInWithEmailAndPassword(account, email, password);
      toast.success("Login Successful");
      setLogginIn(false);
      navigate("/dashboard")
    } catch (err) {
      toast.error("Invalid Email or password.");
      setLogginIn(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLogginIn(true);
    if (email.trim() === "" && password.trim() === "") {
      alert("Please fill in the required Fields");
      setLogginIn(false);
      return;
    } else {
      handleLoginWithEmailandPassword();
    }
  }
  function handleFocus(event) {
    event.target.parentElement.style.borderColor = "var(--primary)";
  }

  function handleBlur(event) {
    event.target.parentElement.style.borderColor = "var(--secondary)";
  }



  return (
    <section className="LoginComponent" direction="row">
      <BackButton />
      {/* <img src={LoginImage} alt="" className="LoginWallpaper" /> */}
      <div className="LoginForm">
        {/* <Link to="/"><img src={StikazLogo} alt="" /></Link> */}
        <form action="" onSubmit={handleSubmit}>
          <h2 style={{ alignSelf: "start" }}>Login</h2>
          <div className="input" onFocus={handleFocus} onBlur={handleBlur}>
            <UserOutlined />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Your Email"
            />
          </div>
          <div className="input" onFocus={handleFocus} onBlur={handleBlur}>
            <LockOutlined />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Your Password"
            />
          </div>
          <button type="submit" className="btn">
            {logginIn ? <LoadingOutlined /> : "Login"}
          </button>
          <small style={{ alignSelf: "center", color: "grey" }}>or</small>
         
        </form>
        <button
            onClick={signInWithGoogle}
            className="btn GoogleRegister"
          >
            {isLoading ? (
              <LoadingOutlined />
            ) : (
              <>
                <img src={GoogleLogo} alt="" />
                oogle
              </>
            )}
          </button>
        <small className="linkAccReg">
          Dont have an Account? <Link to="/register">Register</Link>
        </small>
      </div>
    </section>
  );
};

export default LoginComponent;
