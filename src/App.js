import React, { useState } from "react";
import Calculator from "./Calculator";
import ButtonPad from "./ButtonPad";
import Button from "./Button";
import Output from "./Output";

const calcValues = [
  ["7", "8", "9", "+"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "*"],
  ["0", ".", "=", "/"],
];

const App = () => {
  const [hookResult, setHookResult] = useState({
    result: 0,
  });
  const [hookSign, setHookSign] = useState({
    sign: null,
  });
  const [hookNumber, setHookNumber] = useState({
    number1: 0,
    number2: 0,
    temp: 0,
  });
  const [hookLast, setHookLast] = useState({
    last: null,
  });

  const clearTheOutput = () => {
    console.log("clear");
    setHookResult({
      result: 0,
    });
    setHookSign({
      sign: null,
    });
    setHookNumber({
      number1: 0,
      number2: 0,
      temp: 0,
    });
    setHookLast({
      last: null,
    });
  };

  function numberFunc(button) {
    var notEqual = true;
    if (button == "=") {
      notEqual = false;
      if (hookSign.sign === "+") {
        setHookResult({
          result: parseFloat(
            (+hookNumber.number1 + +hookNumber.number2).toFixed(6)
          ),
        });
      } else if (hookSign.sign === "-") {
        setHookResult({
          result: parseFloat(
            (hookNumber.number1 - hookNumber.number2).toFixed(6)
          ),
        });
      } else if (hookSign.sign === "*") {
        setHookResult({
          result: parseFloat(
            (hookNumber.number1 * hookNumber.number2).toFixed(6)
          ),
        });
      } else if (hookSign.sign === "/") {
        setHookResult({
          result: parseFloat(
            (hookNumber.number1 / hookNumber.number2).toFixed(6)
          ),
        });
      } else {
        console.log("Error 104");
      }
      setHookLast({
        last: null,
      });
      console.log(
        `result: ${hookResult.result}, sign: ${hookSign.sign}, number1: ${hookNumber.number1}, number2: ${hookNumber.number2}, last: ${hookLast.last}`
      );
    } else if (button == "+") {
      notEqual = true;
      setHookSign({
        sign: button,
      });
    } else if (button == "-") {
      notEqual = true;
      setHookSign({
        sign: button,
      });
    } else if (button == "*") {
      notEqual = true;
      setHookSign({
        sign: button,
      });
    } else if (button == "/") {
      notEqual = true;
      setHookSign({
        sign: button,
      });
    } else if (button == ".") {
      notEqual = true;
    } else {
      notEqual = true;
      if (button) {
        console.log(`number ${button}`);
        if (/\d$/.test(hookLast.last)) {
          console.log("PAVYKO");
          setHookNumber({
            number1: hookNumber.number1,
            number2: hookNumber.number2 + button,
            temp: hookNumber.temp + button,
          });
          button = hookNumber.number2 + button;
          console.log(`button: ${button}`);
        } else if (hookLast.last == ".") {
          setHookNumber({
            number1: hookNumber.number1,
            number2: (hookNumber.number2 + button) / 10,
            temp: (hookNumber.temp + button) / 10,
          });
        } else {
          setHookNumber({
            number1: hookNumber.temp,
            number2: button,
            temp: button,
          });
        }
      }
    }
    if (notEqual) {
      setHookResult({
        result: button,
      });
      setHookLast({
        last: button,
      });
      console.log(
        `result: ${hookResult.result}, sign: ${hookSign.sign}, number1: ${hookNumber.number1}, number2: ${hookNumber.number2}, last: ${hookLast.last}`
      );
    }
  }

  return (
    <div>
      <Calculator>
        <Output output={hookResult.result} />
        <ButtonPad>
          <Button value="clear" onClick={clearTheOutput} />
          <br />
          {calcValues.map((line) => {
            return [
              line.map((btn) => {
                return <Button value={btn} onClick={() => numberFunc(btn)} />;
              }),
              <br />,
            ];
          })}
        </ButtonPad>
      </Calculator>
    </div>
  );
};

export default App;
