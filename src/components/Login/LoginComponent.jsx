import { useState } from "react";
import GoogleLogo from "../../assets/googleLogo.png";
import {LoadingOutlined, UserOutlined, LockOutlined} from "@ant-design/icons";
import BackButton from "../Ui/Back";
import "./LoginStyles.css";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(null);

  function handleSubmit() {
    setIsLoading(true)
    if (email.trim === "" && password.trim === "") {
      alert("Please fill in the required Fields");
      setIsLoading(false)
      return;
    } else {
      alert("ALL done!");
      setIsLoading(false);
    }
  }
  function handleFocus(event) {
    event.target.parentElement.style.borderColor = 'var(--primary)';
}

function handleBlur(event) {
    event.target.parentElement.style.borderColor = 'var(--secondary)';
}

  return (
    <section className="LoginComponent" direction="row">
      <BackButton/>
      {/* <img src={LoginImage} alt="" className="LoginWallpaper" /> */}
      <div className="LoginForm">
    {/* <Link to="/"><img src={StikazLogo} alt="" /></Link> */}
      <form action="" onSubmit={handleSubmit}>
      <h2 style={{alignSelf : "start"}}>Login</h2>
     <div className="input" onFocus={handleFocus} onBlur={handleBlur}>
      <UserOutlined/>
       <input type="email" onChange={(e) => setEmail(e.target.value)} required
       placeholder="Enter Your Email"
       />
     </div>
     <div className="input"  onFocus={handleFocus} onBlur={handleBlur}>
       <LockOutlined/>
       <input
         type="password"
         onChange={(e) => setPassword(e.target.value)}
         required
         placeholder="Enter Your Password"
       />
     </div>
     <button type="submit" className="btn">{isLoading ? <LoadingOutlined /> : "Register"}</button>
     <small style={{alignSelf : "center", color : "grey"}}>or</small>
     <button onClick={() => alert("you Clicked")} className="btn GoogleRegister">{isLoading ? <LoadingOutlined/> : <><img src={GoogleLogo} alt=""/>oogle</>}</button>
   </form>
   <small className="linkAccReg">Dont have an Account? <Link to="/register">Register</Link></small>
      </div>
    </section>
  );
};

export default LoginComponent;