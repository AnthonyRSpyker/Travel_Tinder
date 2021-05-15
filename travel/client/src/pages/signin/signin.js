import React, { useState,useContext }from "react";
import AuthService from '../../Service/AuthService';
import {AuthContext} from '../../Context/AuthContext'
import './sign_in.css'
import { useHistory } from "react-router-dom"



const SignIn=props=>{
  const[user,setUser]=useState({
    username: "",
    password: ""
  });
  const authContext=useContext(AuthContext);
  const onChange= e =>{
    e.preventDefault();
    setUser({...user,[e.target.name]:e.target.value});
  }
  const onSubmit= e =>{
    e.preventDefault();
    AuthService.login(user).then(data=>{
        const {isAuthenticated,user,message}= data;
        if(isAuthenticated){
            authContext.setUser(user);
            authContext.setIsAuthenticated(isAuthenticated);
            props.history.push('../profilePage')
        }
        else
            console.log("this is test")  
    })
}

    
  return (
   
    <form onSubmit={onSubmit}>
    <div className="sign-in-form">
      <h4 className="text-center">Sign-In</h4>
      <label for="sign-in-form-username">Username</label>
      <input type="text" className="sign-in-form-username" id="sign-in-form-username" onChange={onChange}/>
      <label for="sign-in-form-password">Password</label>
      <input type="text" className="sign-in-form-password" id="sign-in-form-password" onChange={onChange}/>
      <button  type="submit" className="sign-in-form-button">Sign In</button>
    </div>
  </form>
  
    );
};

export default SignIn;