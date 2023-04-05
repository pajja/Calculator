import React from "react";
import "./style/Output.css";

const Output = ({ output }) => {
  return (
    <div id="output" className="ui floating message">
      <p id="number">{output}</p>
    </div>
  );
};

export default Output;
