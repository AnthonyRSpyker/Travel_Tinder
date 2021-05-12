import React from 'react'
import Landing from "./Pages/landing/landing.js"
import SignIn from "./Pages/signin/signin.js"
import SignUp from "./Pages/signup/signup.js"
// import Matching from "./pages/matching_page/Matching.js"
// import Matches from "./pages/matches/matches.js"
// import Profile from "./pages/profile/profile.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
    return(
  <Router>   
    <Switch>
      <Route exact path = "/">
        <Landing />
      </Route>
      <Route  path = "/signup">
        <SignUp />
      </Route>
      <Route  path = "/signin">
        <SignIn /> 
      </Route>
    
    </Switch>  
  </Router>  
    )
}

export default App;
