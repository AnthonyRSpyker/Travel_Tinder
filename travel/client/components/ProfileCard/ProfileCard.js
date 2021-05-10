import React from "react";
import CardBtn from "../CardBtn/CardBtn"

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="" src="" />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> 
          </li>
          <li>
            <strong>Age:</strong> 
          </li>
          <li>
            <strong>Gender:</strong> 
          </li>
        </ul>
      </div>

      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pick"
      />
      
    </div>
  );
}

export default FriendCard;
