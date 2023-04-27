import React from 'react';
import './S.css';
import logo from '../Images/logo.png';

function S() {
  return (
   <>
   <div class="row mainform">
  <div class="col-lg-6 col-sm-12 main">
    <div class="box">
      <div class="img-box">
        <img src={logo} className="img1 my-3" alt="Logo" />
      </div>
      
      <h1 class="text-center regform">Registration <span>Form</span></h1>
      <form>
        <label for="user">User Name:</label>
        <input type="text" id="user" name="user" required placeholder="Enter your username" />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder="Enter your email" />

        <label for="pass">Password:</label>
        <input type="password" id="pass" name="pass" required placeholder="Enter your password" />

        <button type="submit">Sign Up</button>
      </form>

      <p className="my-3 txt">Already have an account? <a href="/login" className="mx-2">Log In Now!</a></p>
    </div>
  </div>
</div>

   </>
  )
}

export default S
