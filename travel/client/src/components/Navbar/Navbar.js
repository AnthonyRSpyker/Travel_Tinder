import React from "react"
import { useHistory } from "react-router-dom"

function NavBar() {

  const history = useHistory()
    return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="navbar-brand">
        TravelTinder
      </h1>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <h3 onClick = {() => history.push("../")}>
              Log-Out
            </h3>
          </li>
          <li className="nav-item">
            <h3 onClick = {() => history.push("../matches")}>
              Matches
            </h3>
          </li>
          <li className="nav-item">
            <h3 onClick = {() => history.push("../profile")}>
              Your Profile
            </h3>
          </li>
        </ul>
      </div>
    </nav>
       
    )
}

export default NavBar;