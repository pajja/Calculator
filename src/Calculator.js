import React from "react";
import "./style/Calculator.css";

const Calculator = ({ children }) => {
  return (
    <div id="outline">
      <div></div>
      <div id="title">
        <h3 class="ui block header">CALCULATOR</h3>
      </div>
      <div></div>
      <div></div>
      <div id="calculator">{children}</div>
      <div></div>
      <div id="footerLeft">
        <h3 class="ui bottom attached header">Developed by Matas Pajarskas</h3>
      </div>
      <div id="footerMiddle">
        <h3 class="ui bottom attached header">CALCULATOR</h3>
      </div>
      <div id="footerRight">
        <h3 class="ui bottom attached header">
          <button class="ui secondary button">
            <a href="https://github.com/pajja" target="_blank">
              GitHub
            </a>
          </button>
        </h3>
      </div>
    </div>
  );
};

export default Calculator;
