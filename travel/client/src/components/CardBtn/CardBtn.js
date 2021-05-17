import React from "react";
// import "CardBtn.css";


function CardBtn(props) {
  return (
    
    <button onClick={props.onClick} 
       className={`card-btn ${props["data-value"]}`} 
      data-value={props["data-value"]}  class="button-hover-like button"><span>Like me</span><i class="fa fa-heart"></i></button>
      

    // <button  
    //   onClick={props.onClick} 
    //   className={`card-btn ${props["data-value"]}`} 
    //   data-value={props["data-value"]} 
    // ><i class="fa fa-heart"></i></button>
  );
}

export default CardBtn;
