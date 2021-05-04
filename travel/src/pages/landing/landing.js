import React from "react"
import "./landing.css"
import { useHistory } from "react-router-dom"



function Landing() {
  

  const history = useHistory();

  return (
      <div class="hero-full-screen">

       
      
      <div class="middle-content-section">
        <h1>Super Compelling Headline</h1>
        <button class="button_large" onClick = {() => history.push("../signin")}>Sign-In</button>
        <button class="button_large" onClick = {() => history.push("../signup")}>Sign-Up</button>
      </div>
    
      
    
    </div>

    )
}

export default Landing;