import React from "react";
import "./Api.css";


function Api() {
   
  const btnSubmit =async () => {
    const url = "https://api.github.com/users/"+document.getElementById('user').value;
    const api = await fetch(url);
    const data = await api.json();
document.getElementById('name').innerHTML="User Name: " + data.name;
document.getElementById('about').innerHTML= "User ID: " +data.login;
document.getElementById('image').src=data.avatar_url;
  };  
  return (
    <>
      <div className="container my-5 ">
        <h1 className="text-center">GitHub User Profiles using API</h1>
        <div className="gitcontainer text-white my-5 fw-900">
          <img className="imgd" src="" alt="userimage" id="image" />
          <h1 className="my-5" id ='name'>User Name</h1>
          <h3 id="about">User Id</h3>
          <input 
            className="inp my-5 mx-5"
            type="text"
            name="inp"
            id="user"
          />
          <button className="button" onClick={btnSubmit} id="getuser">
            Search User
          </button>
        </div>
      </div>
    </>
  );
}

export default Api;
