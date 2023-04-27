import React from "react";
import "./Login.css";


export default function Login() {
  return (
    <>
      <div className="login">
        <div className="container">
          <h1 className="txt">Login Now!</h1>
          <input
            className="inp"
            type="text"
            placeholder="Enter your E Mail or User Name"
          />
          <input
            className="inp"
            type="Password"
            placeholder="Enter your Password!"
          />
          <button className="login-btn my-5">Log In</button>
        </div>
      </div>
    </>
  );
}
