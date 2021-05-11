import React from 'react'
import Landing from "./pages/landing/landing.js"
import SignIn from "./pages/signin/signin.js"
import SignUp from "./pages/signup/signup.js"
import Matching from "./pages/matching_page/Matching.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
    return(
  <Router>   
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
    </Switch>  
  </Router>  
    )
}

export default App;
