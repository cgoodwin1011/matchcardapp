import React from "react";
import "./CardCard.css";

const CardCard = props => (
  <div className="card"data-value={props.value}>
      <img onClick={() => props.matchCard(props.id, props.value)} alt={props.name} src={props.image} data-id={props.id} data-value={props.value} data-suit={props.suit}/>
  </div>
);

export default CardCard;
