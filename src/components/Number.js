import React from "react";
import "./ComponentStyles.css";

function Number(props) {
  return (
    <div className="button-container">
      <div className="number-container">
        <button
          className="number-button"
          value={1}
          onClick={props.displayNumber}
        >
          1
        </button>
        <button
          className="number-button"
          value={2}
          onClick={props.displayNumber}
        >
          2
        </button>
        <button
          className="number-button"
          value={3}
          onClick={props.displayNumber}
        >
          3
        </button>
        <button
          className="number-button"
          value={4}
          onClick={props.displayNumber}
        >
          4
        </button>
        <button
          className="number-button"
          value={5}
          onClick={props.displayNumber}
        >
          5
        </button>
        <button
          className="number-button"
          value={6}
          onClick={props.displayNumber}
        >
          6
        </button>
        <button
          className="number-button"
          value={7}
          onClick={props.displayNumber}
        >
          7
        </button>
        <button
          className="number-button"
          value={8}
          onClick={props.displayNumber}
        >
          8
        </button>
        <button
          className="number-button"
          value={9}
          onClick={props.displayNumber}
        >
          9
        </button>
        <button
          className="number-button"
          value={0}
          onClick={props.displayNumber}
        >
          0
        </button>
      </div>
      <div className="operator-container">
        <button value="+" onClick={props.displayNumber}>
          +
        </button>
        <button value="-" onClick={props.displayNumber}>
          -
        </button>
        <button value="*" onClick={props.displayNumber}>
          x
        </button>
        <button value="/" onClick={props.displayNumber}>
          /
        </button>
        <button onClick={props.evaluate}>Enter</button>
      </div>
    </div>
  );
}

export default Number;
