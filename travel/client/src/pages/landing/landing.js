import React from "react"
import "./landing.css"
import { useHistory } from "react-router-dom"



function Landing() {
  

  const history = useHistory();

  return (
    <div className="background">
      <div className="hero-full-screen">

       
      
      <div className="middle-content-section">
        <h1>Travel Buddies</h1>
        <button className="button_large-1" onClick = {() => history.push("../signin")}>Sign-In</button>
        <button className="button_large-2" onClick = {() => history.push("../signup")}>Sign-Up</button>
      </div>
    
    
    
    </div>
</div>
    )
}

export default Landing;