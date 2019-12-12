import React from "react";
import "./style.css";




function HeroCard(props) {
//   function deleteMe(){
//     props.handleRedXClick(props.id);
//   }
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={()=>{props.handleClick(props.id)}} alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          {/* <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li> */}
        </ul>
      </div>
      {/* <span className="remove" onClick={()=>{props.handleRedXClick(props.id)}}>𝘅</span> */}
    </div>
  );
}

export default HeroCard;
