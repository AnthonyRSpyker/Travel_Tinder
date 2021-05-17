import React from "react"
import { Link } from 'react-router-dom';
import "./landing.css"




function Landing() {
  

  

  return (
    <div className="body-landing">
      <div className="hero-full-screen">

       
      
      <div className="middle-content-section">
        <h1>Travel Buddies</h1>
        <Link to="/signin"><button className="button_large-1">Sign-In</button></Link>
        <Link to="/signup"><button className="button_large-2">Sign-Up</button></Link>
       </div>
    
    
    
    </div>
</div>
    )
}

export default Landing;