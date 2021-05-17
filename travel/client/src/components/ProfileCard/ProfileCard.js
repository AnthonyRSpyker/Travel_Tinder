import React from "react";
import CardBtn from "../CardBtn/CardBtn"
import "./ProfileCard.css"


function FriendCard(props) {
  const countries = props.countries
  return (

<div className="entire-card">
    <div className="card profile-card-action-icons">
    <div className="card-section">
    <div className="profile-card-header">
    <div className="profile-card-avatar">
        {/* insert image */}
        <img className="avatar-image" src= {props.img} alt="Harry Manchanda">
    </img>
    <div>
      <div className="profile-card-author">
        {/* insert name */}
      <h5 className="about-title separator-left">{props.unsername}</h5>
      </div>
    </div>
    <div>
      <div className="profile-card-author">
        {/* insert age*/}
      <h5 className="about-title separator-left">{props.age}</h5>
      </div>
    </div>
    {/* insert countries, mapping function. */}
    <div className="small-6 columns">
      {/* This should map over the array of countries a person wants to travel to
      I think it needs an actual input first.   */}
          {/* <ul className="arrows"> Countries of interest
            {countries.map((countries) => {
              return <li>{countries}</li>
            })}
          </ul> */}
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

  );
}

export default FriendCard;
