import React, { useState, useEffect } from "react";
import * as math from "mathjs";

export default function Calculator() {
  const [text, setText] = useState("");
  const [result, setresult] = useState("");

  const onaddToText = (event) => {
    var val = event.target.innerHTML;

    setText((text) => [...text, val + ""]); // for adding double digits value
  };

  const onResultHandler = () => {
    var val = text.join(""); // remove commas
    console.log(val);
    console.log(math.evaluate(val));
    setresult(math.evaluate(val));
  };

  const onResetHandler = () => {
    setText("");
    setresult("");
  };

  return (
    <div>
      Calculator
      <div>
        Screen
        <div>
          <p>{text ? text : "0"}</p>
        </div>
        <div>
          <h3>{result ? result : "0"}</h3>
        </div>
      </div>
      <div onClick={onaddToText}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
      <div onClick={onaddToText}>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
      </div>
      <div>
        <button onClick={onResultHandler}>=</button>
        <button onClick={onResetHandler}>C</button>
      </div>
    </div>
  );
}
