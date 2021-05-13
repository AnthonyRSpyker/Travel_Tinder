import React from "react";
import CardBtn from "../CardBtn/CardBtn"
import "./ProfileCard.css"

function FriendCard(props) {
  return (

<div className="Entire Card">
    <div className="card profile-card-action-icons">
    <div className="card-section">
    <div className="profile-card-header">
      <div className="profile-card-avatar">
        <img className="avatar-image" src="https://i.imgur.com/3AeQRbR.jpg" alt="Harry Manchanda">
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
            <li>Enjoying</li>
          </ul>
        </div>
        <div className="small-6 columns">
          <ul className="arrow">
            <li>Maths</li>
            <li>Dancing</li>
            <li>Smiling</li>
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

    
      <CardBtn onClick={props.handleBtnClick}
        data-value="pass"
      />
      
      
      <CardBtn onClick={props.handleBtnClick}
        data-value="pick"
      />
</div>
</div>

  );
}

export default FriendCard;
