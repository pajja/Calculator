import React from "react";
import "./style/Button.css";

const Button = ({ value, onClick }) => {
  return (
    <button id="button" className="circular ui icon button" onClick={onClick}>
      <i>{value}</i>
    </button>
  );
};

export default Button;
