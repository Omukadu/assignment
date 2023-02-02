import React from "react";

function card(props) {
  



  const show = (e) => {
    // console.log(e.target.id);
    let element = document.getElementsByClassName("details");
    let hidebtn = document.getElementsByClassName("hide-btn");
    let showbtn = document.getElementsByClassName("show-btn");
    
    for (let i = 0; i < element.length; i++) {
      // console.log(element[i].id);
      if (e.target.id == element[i].id ) {
        element[i].classList.remove("hide");
        hidebtn[i].classList.remove("hide");
        showbtn[i].classList.add("hide");
      } 
    } 
  };
  const hide = (e) => {
    // console.log(e.target.id);
    let element = document.getElementsByClassName("details");
    let hidebtn = document.getElementsByClassName("hide-btn");
    let showbtn = document.getElementsByClassName("show-btn");
    
    for (let i = 0; i < element.length; i++) {
      // console.log(element[i].id);
      if (e.target.id == element[i].id ) {
        element[i].classList.add("hide");
        hidebtn[i].classList.add("hide");
        showbtn[i].classList.remove("hide");
      } 
    } 
  };  
  return (
    <div className="parent">
      <div className="card">
        <h4>{props.name}</h4>
        <div className="subtop">
          <h5>Contact</h5>
          <h6>{props.phone}</h6>
        </div>
        <div className="subtop">
          <h5>City</h5>
          <h6>{props.city}</h6>
        </div>
        <div className="subtop">
          <h5>Website</h5>
          <h6>{props.website}</h6>
        </div>
        <button className="active show-btn btn" id={props.id} onClick={show}>
          View Details
        </button>
        <button className="hide hide-btn btn" id={props.id} onClick={hide}>
          Hide Details
        </button>
      </div>

      <div className="details hide" id={props.id}>
        <div className="desc" style={{ marginLeft: "3vw" }}>
          <h4>Description</h4>
          <p>{props.description}</p>  
        </div>

        <div className="more-dtls">
          <div className="info-left">
            <div className="sub">
              <h5>username</h5>
              <h6>{props.username}</h6>
            </div>
            <div className="sub">
              <h5>Company name</h5>
              <h6>{props.company}</h6>
            </div>
            <div className="sub">
              <h5>Zipcode</h5>
              <h6>{props.zipcode}</h6>
            </div>
          </div>

          <div className="info-right">
            <div className="sub">
              <h5>Street</h5>
              <h6>{props.street}</h6>
            </div>
            <div className="sub">
              <h5>suite</h5>
              <h6>{props.suite}</h6>
            </div>
            <div className="sub">
              <h5>city</h5>
              <h6>{props.city}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
