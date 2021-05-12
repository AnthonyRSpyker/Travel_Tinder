import React from "react"
import { useHistory } from "react-router-dom" // {Link}
import "./Navbar.css"

function NavBar() {

  const history = useHistory()
    return (
  

<div className="container-row-1">
<div className="social-links">
  <div className="row-1">
    <h1>TravelTinder</h1>
    <div className="small-6 medium-3 columns  mobile-stack">
      <p onClick = {() => history.push("../")}><i class="fa fa-facebook" aria-hidden="true"></i>Log out</p>
    </div>
    </div>
    <div className="row-1">
    <div className="small-6 medium-3 columns mobile-stack">
      <p onClick = {() => history.push("../matches")}><i class="fa fa-instagram" aria-hidden="true"></i>Matches</p>
    </div>
    </div>
    <div className="row-1">
    <div className="small-6 medium-3 columns mobile-stack">
      <p onClick = {() => history.push("../profile")}><i class="fa fa-pinterest-p" aria-hidden="true"></i>Profile</p>
    </div>

    </div>
  </div>

</div>

       
    )
}

export default NavBar;