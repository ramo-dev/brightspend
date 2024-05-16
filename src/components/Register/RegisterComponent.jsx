import {
  LoadingOutlined,
  UserOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
// import RegisterImage from "../../assets/design/stikazwallpaperReg.jpg";
// import StikazLogo from "../../assets/design/Logo/png/logo-no-background.png";
import GoogleLogo from "../../assets/googleLogo.png";
import "./RegisterStyles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import BackButton from "../Ui/Back";
import { account } from "../../firebase/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import signInWithGoogle from "../../utils/SignInWithGoogle";

const RegisterComponent = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [confPass, setConfPass] = useState("");
  const [match, setMatch] = useState(true); // Initially assuming passwords match
  const [isLoading, setIsLoading] = useState(false);
  const [signingIn, setSigningIn] = useState(false);

  // Function to Register User using their Email and Password
  async function RegisterWithEmailAndPass() {
    setSigningIn(true);
    try {
      await createUserWithEmailAndPassword(account, email, password);
      // If the execution reaches here, registration was successful else you fucked Up,Lmao
      toast.success("Registration Successful");
      setSigningIn(false);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("The email address is already in use.");
      } else {
        toast.error("An error occurred. Please try again later.");
        // toast.error(err)
      }
      setSigningIn(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSigningIn(true);
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      username.trim() === ""
    ) {
      alert("Please fill in the required Fields");
      setSigningIn(false);
      return;
    }
    if (password !== confPass) {
      setMatch(false);
      setSigningIn(false);
      return;
    } else {
      RegisterWithEmailAndPass();
    }
    // Passwords match, you can proceed with your registration logic here
  }

  function handleFocus(event) {
    event.target.parentElement.style.borderColor = "var(--primary)";
  }

  function handleBlur(event) {
    event.target.parentElement.style.borderColor = "var(--secondary)";
  }


  async function handleSignInWithGoogle() {
    setIsLoading(true);
    try {
        await signInWithGoogle(); 
        setIsLoading(false); 
    } catch (err) {
        toast.error(err); 
        setIsLoading(false); 
}
  }

  return (
    <section className="RegisterComponent" direction="row">
      <BackButton />
      <Toaster position="top-right" richColors />
      {/* <img src={RegisterImage} alt="" className="RegisterWallpaper" /> */}
      <div className="RegisterForm">
        <Link to="/">{/* <img src={StikazLogo} alt="" /> */}</Link>

        <form onSubmit={handleSubmit}>
          <h2 style={{ alignSelf: "start" }}>Register</h2>
          <div className="input" onFocus={handleFocus} onBlur={handleBlur}>
            <UserOutlined />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter Your Name"
            />
          </div>
          <div className="input" onFocus={handleFocus} onBlur={handleBlur}>
            <MailOutlined />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Your Email"
            />
          </div>
          <div
            className="input"
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ borderColor: !match && "red" }}
          >
            <LockOutlined />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Your Password"
            />
          </div>

          <div
            className="input"
            style={{ borderColor: !match && "red" }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {!match && <small className="Error">Passwords dont match*</small>}
            <LockOutlined />
            <input
              type="password"
              onChange={(e) => {
                setConfPass(e.target.value);
                setMatch(true);
              }}
              required
              placeholder="Confirm Your Password"
            />
          </div>
          <button type="submit" className="btn">
            {signingIn ? <LoadingOutlined /> : "Register"}
          </button>
          <small style={{ alignSelf: "center", color: "grey" }}>or</small>
         
        </form>
        <button
            onClick={handleSignInWithGoogle}
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
          Have an Account? <Link to="/login">Login</Link>
        </small>
      </div>
    </section>
  );
};

export default RegisterComponent;
