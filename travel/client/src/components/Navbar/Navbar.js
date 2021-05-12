import React from "react"
import { useHistory } from "react-router-dom" // {Link}
import "./Navbar.css"

function NavBar() {

  const history = useHistory()
    return (
  

<div className="social-links">
  <div className="row">
    <h1>TravelTinder</h1>
    <div className="small-6 medium-3 columns text-center mobile-stack">
      <a onClick = {() => history.push("../")}><i className="fa fa-facebook" aria-hidden="true"></i>Log out</a>
    </div>
    <div className="small-6 medium-3 columns text-center mobile-stack">
      <a onClick = {() => history.push("../matches")}><i className="fa fa-instagram" aria-hidden="true"></i>Matches</a>
    </div>
    <div className="small-6 medium-3 columns text-center mobile-stack">
      <a onClick = {() => history.push("../profile")}><i className="fa fa-pinterest-p" aria-hidden="true"></i>Profile</a>
    </div>
  </div>
</div>


       
    )
}

export default NavBar;