import React from "react"
import "./matches.css"


function Matches(props) {

    

    return (
       
         
       
    <div>
    <div className="people-you-might-know">
      <div className="add-people-header">
        <h6 className="header-title">
          Your Matches:
        </h6>
      </div>
      </div>
      <div className="first-match-profile">
    <div className="first-match-profile">
      <div className="row add-people-section">
        <div className="small-12 medium-6 columns about-people">
          <div className="about-people-avatar">
            <img className="avatar-image" src= {props.img} alt= {props.userName}>
          </img>
          </div>
          </div>
          <div className="about-people-author">
            <p className="author-name">
             {props.userName}
            </p>
            <p class="author-location">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              Messages Holding Space
            </p>
          </div>    
        
        <div className="small-12 medium-6 columns add-friend">
          <div className="add-friend-action">
            <button className="button primary small">
              <i className="fa fa-user-plus" aria-hidden="true"></i>
              Chat!
            </button>
            <button className="button secondary small">
              <i className="fa fa-user-times" aria-hidden="true"></i>
              Remove
            </button>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>

    )
}
        
        export default Matches;