import React from "react"
import "./sign_in.css"




function SignIn() {

  return (
    
    <form>
    <div class="sign-in-form">
      <h4 class="text-center">Sign In</h4>
      <label for="sign-in-form-username">Username</label>
      <input type="text" class="sign-in-form-username" id="sign-in-form-username"/>
      <label for="sign-in-form-password">Password</label>
      <input type="text" class="sign-in-form-password" id="sign-in-form-password"/>
      <button type="submit" class="sign-in-form-button">Sign In</button>
    </div>
  </form>
    );
};

export default SignIn;