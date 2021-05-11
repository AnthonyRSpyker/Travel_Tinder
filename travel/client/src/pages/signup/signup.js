import React from "react"
import "./signup.css"
import { useHistory } from "react-router-dom"


function Signup() {

  const history = useHistory();

  return (

    <div class="hero-full-screen">


      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"></link>
      <form>
        <div class="form-icons">
          <h4>Register for an account</h4>
          <div class="all-form">

            <div class="input-group">
              <span class="input-group-label">
                <i class="fa fa-user"></i>
              </span>
              <input class="input-group-field" type="text" placeholder="Full name"></input>
            </div>

            <div class="input-group">
              <span class="input-group-label">
                <i class="fa fa-envelope"></i>
              </span>
              <input class="input-group-field" type="text" placeholder="Email"></input>
            </div>

            <div class="input-group">
              <span class="input-group-label">
                <i class="fa fa-key"></i>
              </span>
              <input class="input-group-field" type="text" placeholder="Password"></input>
            </div>
          </div>

         







        </div>


        <div class="callout" id="switch-toggle-all">



          <div class="polls">
            <h5 class="polls-question">
              <span class="polls-question-label">Q:</span>
    What Languages Do You Speak?
  </h5>
            <div class="polls-options">
              <div>
                <input id="checkbox1" type="checkbox"></input>
                <label for="checkbox1">Spanish</label>
              </div>
              <div>
                <input id="checkbox2" type="checkbox"></input>
                <label for="checkbox2">Manderine</label>
              </div>
              <div>
                <input id="checkbox3" type="checkbox"></input>
                <label for="checkbox3">French</label>
              </div>
              <div>
                <input id="checkbox4" type="checkbox"></input>
                <label for="checkbox4">German</label>
              </div>
            </div>
            <div class="polls-submit">
              <input type="submit" class="button" value="Submit Vote"></input>
            </div>
          </div>
          <h5 class="polls-question">
              <span class="polls-question-label">Q:</span>
    What Continents do you want to travel to?
  </h5>
  <div class="polls-options">
              <div>
                <input id="checkbox1" type="checkbox"></input>
                <label for="checkbox1">Spanish</label>
              </div>
              <div>
                <input id="checkbox2" type="checkbox"></input>
                <label for="checkbox2">Manderine</label>
              </div>
              <div>
                <input id="checkbox3" type="checkbox"></input>
                <label for="checkbox3">French</label>
              </div>
              <div>
                <input id="checkbox4" type="checkbox"></input>
                <label for="checkbox4">German</label>
              </div>
            </div>
            <div class="polls-submit">
              <input type="submit" class="button" value="Submit Vote"></input>
            </div>

          <h1>What is your prefered Gender?</h1>

          <div class="mobile-app-toggle" data-mobile-app-toggle>
            <button class="button">Male</button>
            <button class="button">Female</button>
            <button class="button">Other</button>
          </div>

        </div>




      
       
  
  

  <button class="button expanded" onClick = {() => history.push("../matching_page")}>Sign Up</button>
</form>
</div>
    )};





export default Signup;