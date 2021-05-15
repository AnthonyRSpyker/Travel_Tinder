import React from "react";
// import CardBtn from "../CardBtn/CardBtn"
import "./profile.css"
import Navbar from "../../components/Navbar/Navbar.js"

function FriendCard(props) {
  return (


<div className="entire-card">
<Navbar />
    <div className="card profile-card-action-icons">
    <div className="card-section">
    <div className="profile-card-header">
      <div className="profile-card-avatar">
        <img className="avatar-image" src="https://images.unsplash.com/photo-1588004051197-25cc43a9cbe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" alt="Harry Manchanda">
    </img>
    <div>
      <div className="profile-card-author">
        
      <h5 className="about-title separator-left">User Name</h5>
      </div>
    </div>
    <div className="profile-card-about">
    <div className="row about-skills">
        <div className="small-6 columns">
          <ul className="arrow">
            <li>Age</li>
            <li>Perfered Gender</li>
            <h5 className="about-title separator-left">Countries I want to travel too</h5>
            <li>France</li>
          </ul>
        </div>
        <div className="small-6 columns">
          <ul className="arrow">
            <li>Egypt</li>
            <li>Italy</li>
            <li>Japan</li>
          </ul>
        </div>
        <h5 className="about-title separator-left">About Me</h5>
      <p className="about-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem eveniet nulla quae ullam sit iure voluptatum, nesciunt voluptas perferendis, minus natus in quaerat?
      </p>
      </div>
    </div>
    <div className="profile-card-action">
      <div className="action-area">
        <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Like Harry Profile">
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <span className="show-for-sr">Like Harry Profile</span>
        </a>
      </div>
      
      <div className="action-area">
        <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Add Harry as a Friend">
          <i className="fa fa-user-plus" aria-hidden="true"></i>
          <span className="show-for-sr">Add Harry as a Friend</span>
        </a>
      </div>
      
      
      </div>
    </div>
  </div>
</div>

    
      {/* <CardBtn onClick={props.handleBtnClick} */}
        {/* data-value="pass" */}
      {/* /> */}
      
      
      {/* <CardBtn onClick={props.handleBtnClick} */}
        {/* data-value="pick" */}
      {/* /> */}
</div>
</div>

  );
}

export default FriendCard;

