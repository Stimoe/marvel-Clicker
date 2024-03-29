import React from "react";
import "./style.css";




function HeroCard(props) {

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
        </ul>
      </div>

    </div>
  );
}

export default HeroCard;
