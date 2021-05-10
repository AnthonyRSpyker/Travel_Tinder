import React, { useState }from "react"
import "./sign_in.css"
import { useHistory } from "react-router-dom"



function SignIn() {

//     const history = useHistory();

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")


//     function profilePageDirection(){
//         return () => history.push("../signup")
//     }
//     function returnHome () {
//         return () => history.push("../")
//     }
//     function handleSubmit (event){

//         const userEmail = event.target.value
//         setEmail(userEmail)

//         const userPassword = event.target.value
//         setPassword(userPassword)

//         if(login){
//             profilePageDirection()
//         }
//         else {
//             returnHome()
//         }

//     }

    
  return (
    
    <form>
    <div class="sign-in-form">
      <h4 class="text-center">Sign In</h4>
      <label for="sign-in-form-username">Username</label>
      <input type="text" class="sign-in-form-username" id="sign-in-form-username" value="{email}"/>
      <label for="sign-in-form-password">Password</label>
      <input type="text" class="sign-in-form-password" id="sign-in-form-password" value="{password}"/>
      <button onClick="{handleSubmit}" type="submit" class="sign-in-form-button">Sign In</button>
    </div>
  </form>
    );
};

export default SignIn;