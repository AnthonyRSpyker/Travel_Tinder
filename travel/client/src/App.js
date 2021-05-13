import React from 'react'
import Landing from "./pages/landing/landing.js"
import SignIn from "./pages/signin/signin.js"
import SignUp from "./pages/signup/signup.js"
import Matching from "./pages/matching_page/Matching.js"
import Matches from "./pages/matches/Matches.js"
import Profile from "./pages/profile/profile.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
    return(
  <Router>   
    <div>
    <Switch>
      <Route exact path = "/">
        <Landing />
      </Route>
      <Route exact path = "/signup">
        <SignUp />
      </Route>
      <Route exact path = "/signin">
        <SignIn /> 
      </Route>
      <Route exact Path = "/matching_page">
        <Matching />
      </Route>
      <Route exact Path = "/matches">
        <Matches />
      </Route>
      <Route exact Path = "/profile">
        <Profile />
      </Route>
    </Switch> 
    </div> 
  </Router>  
    )
}

export default App;
