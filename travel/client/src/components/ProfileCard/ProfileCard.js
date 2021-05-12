import React from "react";
import CardBtn from "../CardBtn/CardBtn"
import "./ProfileCard.css"

function FriendCard(props) {
  return (

<div className="Entire Card">
    <div class="card profile-card-action-icons">
    <div class="card-section">
    <div class="profile-card-header">
      <div class="profile-card-avatar">
        <img class="avatar-image" src="https://i.imgur.com/3AeQRbR.jpg" alt="Harry Manchanda">
    </img>
    <div>
      <div class="profile-card-author">
        
      <h5 class="about-title separator-left">User Name</h5>
      </div>
    </div>
    <div class="profile-card-about">
    <div class="row about-skills">
        <div class="small-6 columns">
          <ul class="arrow">
            <li>Age</li>
            <li>Perfered Gender</li>
            <h5 class="about-title separator-left">Countries I want to travel too</h5>
            <li>Enjoying</li>
          </ul>
        </div>
        <div class="small-6 columns">
          <ul class="arrow">
            <li>Maths</li>
            <li>Dancing</li>
            <li>Smiling</li>
          </ul>
        </div>
        <h5 class="about-title separator-left">About Me</h5>
      <p class="about-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem eveniet nulla quae ullam sit iure voluptatum, nesciunt voluptas perferendis, minus natus in quaerat?
      </p>
      </div>
    </div>
    <div class="profile-card-action">
      <div class="action-area">
        <a href="#" class="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Like Harry Profile">
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <span class="show-for-sr">Like Harry Profile</span>
        </a>
      </div>
      
      <div class="action-area">
        <a href="#" class="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Add Harry as a Friend">
          <i class="fa fa-user-plus" aria-hidden="true"></i>
          <span class="show-for-sr">Add Harry as a Friend</span>
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
