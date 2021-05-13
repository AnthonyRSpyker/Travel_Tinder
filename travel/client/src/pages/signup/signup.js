import React from "react"
import "./signup.css"
import { useHistory } from "react-router-dom"


function Signup() {

  const history = useHistory();

  return (

    <div className="hero-full-screen">


      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"></link>
      <form>
        <div className="form-icons">
          <h4>Register for an account</h4>
          <div className="all-form">

            <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-user"></i>
              </span>
              <input className="input-group-field" type="text" placeholder="Full name" value=""></input>
            </div>

            <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-envelope"></i>
              </span>
              <input className="input-group-field" type="text" placeholder="Email" value=""></input>
            </div>

            <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-key"></i>
              </span>
              <input className="input-group-field" type="text" placeholder="Password" value=""></input>
            </div>
            <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-key"></i>
              </span>
              <input className="input-group-field" type="text" placeholder="Confirm Password" value=""></input>
            </div>
            <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-key"></i>
              </span>
              <input className="input-group-field" type="text" placeholder="Age" value=""></input>
            </div>
            <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-key"></i>
              </span>
              <input className="input-group-field" type="text" placeholder="Prefered Gender" value=""></input>
            </div>
          </div>
        </div>


        <div className="callout" id="switch-toggle-all">



          <div className="polls">
            <h5 className="polls-question">
              <span className="polls-question-label">Q:</span>
    What Languages Do You Speak?
  </h5>
            <div className="polls-options">
              <div>
                <input id="checkbox1-a" type="checkbox"></input>
                <label className="checkbox1-a">Spanish</label>
              </div>
              <div>
                <input id="checkbox2" type="checkbox"></input>
                <label className="checkbox2">Manderine</label>
              </div>
              <div>
                <input id="checkbox3" type="checkbox"></input>
                <label className="checkbox3">French</label>
              </div>
              <div>
                <input id="checkbox4" type="checkbox"></input>
                <label className="checkbox4">German</label>
              </div>
            </div>
            
          </div>
          <h5 className="polls-question">
            <span className="polls-question-label">Q:</span>
    What Continents do you want to travel to?
  </h5>
          <div className="polls-options">

            <div>
              <input id="checkbox1" type="checkbox"></input>
              <label className="checkbox1">Asian</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox"></input>
              <label className="checkbox2">Bangkok, Thailand</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox"></input>
              <label className="checkbox2">Singapore, Singapore</label>
            </div>


            <div>
              <input id="checkbox1" type="checkbox"></input>
              <label className="checkbox1">Africa</label>
            </div>
            <div>
              <input id="checkbox1" type="checkbox"></input>
              <label className="checkbox2">South, Africa</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox"></input>
              <label className="checkbox2">Tunisia</label>
            </div>


            <div>
              <input id="checkbox1" type="checkbox"></input>
              <label className="checkbox1">Australia/ Oceania</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox"></input>
              <label className="checkbox2">Sydney</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox"></input>
              <label className="checkbox2">Cocos (keeling) Islands</label>
            </div>


            <div>
              <input id="checkbox1" type="checkbox"></input>
              <label className="checkbox1">Europe</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox"></input>
              <label className="checkbox2">Italy</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox"></input>
              <label className="checkbox2">Greece</label>
            </div>

            <div>
              <input id="checkbox1" type="checkbox"></input>
              <label className="checkbox1">North America</label>
            </div>
          </div>
          <div>
            <input id="checkbox2" type="checkbox"></input>
            <label className="checkbox2">New York City, New York</label>
          </div>
          <div>
            <input id="checkbox2" type="checkbox"></input>
            <label className="checkbox2">Miami, Florida</label>
          </div>
          <div>
            <input id="checkbox1" type="checkbox"></input>
            <label className="checkbox1">South America</label>
          </div><div>
            <input id="checkbox2" type="checkbox"></input>
            <label className="checkbox2">Bogota, Colombia</label>
          </div><div>
            <input id="checkbox2" type="checkbox"></input>
            <label className="checkbox2">Santiago de Chile, Chile</label>
          </div>
        </div>


        
        <div className="status-update-input-box">
          <form>
            <div className="row input-box-container">
              <div className="columns">
                <label> Personal Bio Seciton (500 characters max.)
          <textarea rows="5" placeholder="Hey Harry, What's on your mind?"></textarea>
                </label>
              </div>
            </div>
            {/* <div className="row medium-collapse user-action-container">
              <div className="small-12 medium-7 columns">
                <div className="user-action-box">
                  <div className="action-area">
                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Upload a Photo">
                      <i className="fa fa-picture-o" aria-hidden="true"></i>
                      <span className="show-for-sr">Upload a Photo</span>
                    </a>
                  </div>
                  <div className="action-area">
                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Upload a Video">
                      <i className="fa fa-video-camera" aria-hidden="true"></i>
                      <span className="show-for-sr">Upload a Video</span>
                    </a>
                  </div>
                  <div className="action-area">
                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Check in">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span className="show-for-sr">Check in</span>
                    </a>
                  </div>
                  <div className="action-area">
                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Add a Feeling">
                      <i className="fa fa-smile-o" aria-hidden="true"></i>
                      <span className="show-for-sr">Add a Feeling</span>
                    </a>
                  </div>
                  <div className="action-area">
                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Tag a Friend">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                      <span className="show-for-sr">Tag a Friend</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="small-12 medium-5 columns">
                <div className="user-submit-box">
                  <input type="submit" className="button small" value="POST"></input>
                </div>
              </div>
            </div> */}
          </form>
        </div>



        <button className="button expanded" onClick={() => history.push("../matching_page")}>Sign Up</button>
      </form>
    </div>
  )
};
export default Signup;