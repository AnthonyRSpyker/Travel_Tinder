import React from "react"
import "./Matches.css"
import Navbar from "../../components/Navbar/Navbar.js"
import MatchesDiv from "../../components/Matches/matches.js"

function Matches() {

    

    return (
       <div>
        <Navbar /> 
       <MatchesDiv />
    
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
            <img className="avatar-image" src="https://i.imgur.com/UPVxPjb.jpg" alt="Kishore Kumar">
          </img>
          </div>
          </div>
          <div className="about-people-author">
            <p className="author-name">
              Match 1 Name
            </p>
            <p class="author-location">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              Match Location or Info
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
        <div className="second-match-profile">
      <div className="row add-people-section">
        <div className="small-12 medium-6 columns about-people">
          <div className="about-people-avatar">
            <img className="avatar-image" src="https://i.imgur.com/GHeazQ2.jpg" alt="Kishore Kumar">
          </img>
          <div className="about-people-author">
            <p className="author-name">
              Match 2 Name
            </p>
            <p className="author-location">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              Match Location or Info
            </p>
          </div>    
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
      <div className="third-match-profile">
      <div className="row add-people-section">
        <div className="small-12 medium-6 columns about-people">
          <div className="about-people-avatar">
            <img className="avatar-image" src="https://i.imgur.com/SytPzuC.jpg" alt="Kishore Kumar">
          </img>
          <div className="about-people-author">
            <p className="author-name">
              Match 3 Name
            </p>
            <p className="author-location">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
             Match Location or Info
            </p>
          </div>    
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

</div> 
</div> 
     
    )
};


export default Matches;

