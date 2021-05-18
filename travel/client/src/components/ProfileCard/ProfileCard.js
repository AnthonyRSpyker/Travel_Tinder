import React from "react";
import CardBtn from "../CardBtn/CardBtn"
import "./ProfileCard.css"


function FriendCard ({ person, likedOrDisliked }) {
  

  const {__id, username, img, age, countries} = person

  return (

<div className="entire-card">
    <div className="card profile-card-action-icons">
    <div className="card-section">
    <div className="profile-card-header">
    <div className="profile-card-avatar">
        
        <img className="avatar-image" src={img} alt="Harry Manchanda">
    </img>
    <div>
      <div className="profile-card-author">
        
      <h5 className="about-title separator-left">{username}</h5>
      </div>
    </div>
    <div>
      <div className="profile-card-author">
        
      <h5 className="about-title separator-left">{age}</h5>
      </div>
    </div>
        <div className="small-6 columns">
          {<ul className="arrows"> Countries of interest
            {countries.map((countries) => {
              return <li>{countries}</li>
            })}
          </ul>
        }
        </div>
      </div>
    </div>
  </div>
</div>

      <CardBtn onClick={() => likedOrDisliked(__id, "ADD_TO_LIKED")}
        data-value="pass"
      />
      
      
      <CardBtn onClick={() => likedOrDisliked(__id, "ADD_TO_DISLIKED")}
        data-value="pick"
      />
</div>

  );
}

export default FriendCard;
