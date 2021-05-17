import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
// import CardBtn from "../CardBtn/CardBtn"
import Navbar from "../../components/Navbar/Navbar.js";
import API from "../../utils/API";
import "./profile.css";

function FriendCard() {

  // this may be wrong.  I may have to pass in props.
  const [person, setPerson] = useState({})
    
    const {id} = useParams()
      useEffect(() => {
        API.getPerson(id)
          .then(res => setPerson(res.data))
          .catch(err => console.log(err));
      }, [])


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
        
      <h5 className="about-title separator-left">{person.username}</h5>
      </div>
    </div>
    <div className="profile-card-about">
    <div className="row about-skills">
        <div className="small-6 columns">
          <ul className="arrow">
            <li>{person.age}</li>
            <li>{person.gender}</li>

            {/* need to figure out how to deal with countries listing, should be on the 
            profilecard.js, use that. */}
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
        {person.bio}
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

