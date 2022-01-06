import React from "react";
import "./logout.css";
import { BsPersonFill, BsFillLockFill } from "react-icons/bs";

const Logout = () => {
  return (
    <div className="logoutcontainer">
      <div id="logintitle">INVENTORY MANAGEMENT SYSTEM</div>
      <div id="loginform"></div>
      <div id="loginformid"></div>
      <div id="loginformtop">
        <p>Login Form</p>
        <div className="emailfieldcontain">
          <BsPersonFill id="loginicon" />
          <input placeholder="Email" id="emailfield" type="email" />
        </div>

        <div className="passfieldcontain">
          <BsFillLockFill id="loginicon" />
          <input placeholder="Password" id="passwfield" type="password" />
        </div>

        <div className="bottomcontain">
          <button id="logbut">Login</button>
          <span id="logfogpass">Forgot Password?</span>
        </div>
      </div>
    </div>
  );
};

export default Logout;
