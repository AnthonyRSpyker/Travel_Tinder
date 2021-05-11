import React from "react"
import "./signup.css"




function signup() {

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
          <div class="switch-toggle-wrapper">
            <div class="switch">
              <input class="switch-input" id="exampleSwitch1" type="checkbox" name="exampleSwitch" data-toggle-all></input>
              <label class="switch-paddle" for="exampleSwitch1">
                <span class="show-for-sr">Toggle All</span>
              </label>
            </div>
            <span>Toggle All</span>
          </div>

          <hr />

          <div class="switch-toggle-wrapper">
            <div class="switch">
              <input class="switch-input" id="exampleSwitch2" type="checkbox" name="exampleSwitch2"></input>
              <label class="switch-paddle" for="exampleSwitch2">
                <span class="show-for-sr">Africa</span>
              </label>
            </div>
            <span>Africa</span>
          </div>

          <div class="switch-toggle-wrapper">
            <div class="switch">
              <input class="switch-input" id="exampleSwitch3" type="checkbox" name="exampleSwitch3"></input>
              <label class="switch-paddle" for="exampleSwitch3">
                <span class="show-for-sr">Antarctica</span>
              </label>
            </div>
            <span>Antarctica</span>
          </div>

          <div class="switch-toggle-wrapper">
            <div class="switch">
              <input class="switch-input" id="exampleSwitch4" type="checkbox" name="exampleSwitch4"></input>
              <label class="switch-paddle" for="exampleSwitch4">
                <span class="show-for-sr">Asia</span>
              </label>
            </div>
            <span>Asia</span>
          </div>

          <div class="switch-toggle-wrapper">
            <div class="switch">
              <input class="switch-input" id="exampleSwitch5" type="checkbox" name="exampleSwitch5"></input>
              <label class="switch-paddle" for="exampleSwitch5">
                <span class="show-for-sr">Australia</span>
              </label>
            </div>
            <span>Australia</span>
          </div>

          <div class="switch-toggle-wrapper">
            <div class="switch">
              <input class="switch-input" id="exampleSwitch6" type="checkbox" name="exampleSwitch6"></input>
              <label class="switch-paddle" for="exampleSwitch6">
                <span class="show-for-sr">Europe</span>
              </label>
            </div>
            <span>Europe</span>
          </div>

          <div class="switch-toggle-wrapper">
            <div class="switch">
              <input class="switch-input" id="exampleSwitch7" type="checkbox" name="exampleSwitch7"></input>
              <label class="switch-paddle" for="exampleSwitch7">
                <span class="show-for-sr">North America</span>
              </label>
            </div>
            <span>North America</span>
          </div>

          <div class="switch-toggle-wrapper">
            <div class="switch">
              <input class="switch-input" id="exampleSwitch8" type="checkbox" name="exampleSwitch8"></input>
              <label class="switch-paddle" for="exampleSwitch8">
                <span class="show-for-sr">South America</span>
              </label>
            </div>
            <span>South America</span>
          </div>

          <h1>What is your prefered Gender?</h1>

          <div class="mobile-app-toggle" data-mobile-app-toggle>
            <button class="button">Male</button>
            <button class="button">Female</button>
            <button class="button">Other</button>
          </div>

        </div>



        <button class="button expanded">Sign Up</button>
      </form>
    </div>
  )
};




export default signup;