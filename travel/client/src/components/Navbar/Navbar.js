import React from "react"
import { Link } from "react-router-dom"

function NavBar() {

    return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        TravelTinder
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" 
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Log-Out
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/matches"
              className={window.location.pathname === "/matches" ? "nav-link active" : "nav-link"}
            >
              Matches
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/personalprofile"
              className={window.location.pathname === "/personalprofile" ? "nav-link active" : "nav-link"}
            >
              Your Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
       
    )
}

export default NavBar;