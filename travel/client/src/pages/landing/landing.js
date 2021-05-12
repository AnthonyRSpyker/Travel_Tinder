import React from "react"
import "./landing.css"
import { useHistory } from "react-router-dom"



function Landing() {
  

  const history = useHistory();

  return (
      <div className="hero-full-screen">

       
      
      <div className="middle-content-section">
        <h1>Super Compelling Headline</h1>
        <button className="button_large" onClick = {() => history.push("../signin")}>Sign-In</button>
        <button className="button_large" onClick = {() => history.push("../signup")}>Sign-Up</button>
      </div>
    
      
    
    </div>

    )
}

export default Landing;