import React from 'react';
import './Signup.css';
import logo from '../Images/logo.png';
import swal from 'sweetalert';


function Signup() {
 
 const Signupnow = ()=>{
  var name = document.getElementById('user').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;

  localStorage.setItem('Name', name);
  localStorage.setItem('Email', email);
  localStorage.setItem('Password', pass);
  if (name === "" & email === "" & pass === ""){
    swal("Oops!", "Some Fields are Empty!", "warning");
  } else{
    swal("Congratulations!", "Your Account is Registered Now!", "success");
  }
  

 }


  return (
    <>
    <div className=' row mainform'>
    <div className="col-lg-6 col-md-6 main">
        <div className="box">
          <div className="img-box">
          <img src={logo} className='img1 my-3' alt="" />
          </div>
          
          <h1 className='text-center regform'>Registration <span>Form</span></h1>
          
            <input className='inp' type="text" required placeholder='Enter User Name' id="user" />
        
            <input className='inp' type="email" name="email" required placeholder='Enter E Mail' id="email" />
            
            <input className='inp' type="Password" required  placeholder='Enter Password' id="pass" />
            <br />
            <button onClick={Signupnow}>SignUp</button>
            <p className='my-3 txt'>Already have an Account?<a href="/login" className='mx-2'>LogIn Now!</a></p>
        </div>
    </div>
        
    </div>
    
    </>
  )
}

export default Signup
