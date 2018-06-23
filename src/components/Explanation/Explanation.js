import React from "react";
import "./Explanation.css";

const Explanation = props =>  <h1 className="explanation">{props.children}</h1>;
const Title = props => <h1 className="title">{props.children}</h1>;


export default Explanation;
