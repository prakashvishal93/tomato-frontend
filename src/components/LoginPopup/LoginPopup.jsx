import React from "react";
import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({setShowLogin}) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>


        <div className="login-popup-inputs">
          {currentState === "Login" ?<></>: <input type="text" placeholder="Your Name" required />}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button> {currentState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the Terms and Conditions</p>
        </div>
        {currentState === "Login" ? 
          <p> Create New Account? <span onClick={()=>{setCurrentState('Sign Up')}}>Click Here</span>  </p> : 
          <p>Already have an Account? <span onClick={()=>{setCurrentState('Login')}}>Login Here</span></p>
        }
      </form>
    </div>
  );
};

export default LoginPopup;
