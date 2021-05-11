import React from "react"
import { useHistory } from "react-router-dom"
import "./Navbar.css"

function NavBar() {

  const history = useHistory()
    return (
  

<div class="social-links">
  <div class="row">
    <h1>TravelTinder</h1>
    <div class="small-6 medium-3 columns text-center mobile-stack">
      <a onClick = {() => history.push("../")}><i class="fa fa-facebook" aria-hidden="true"></i>Log out</a>
    </div>
    <div class="small-6 medium-3 columns text-center mobile-stack">
      <a onClick = {() => history.push("../matches")}><i class="fa fa-instagram" aria-hidden="true"></i>Matches</a>
    </div>
    <div class="small-6 medium-3 columns text-center mobile-stack">
      <a onClick = {() => history.push("../profile")}><i class="fa fa-pinterest-p" aria-hidden="true"></i>Profile</a>
    </div>
  </div>
</div>


       
    )
}

export default NavBar;