import React from "react";
import "./ComponentStyles.css";

function Buttons(props) {
  return (
    <div className="button-container">
      <div className="left-container">
        <button className="clear-button" onClick={props.clearScreen}>
          Clear
        </button>
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
            className="number-button "
            value={4}
            onClick={props.displayNumber}
          >
            4
          </button>
          <button
            className="number-button "
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
            className="number-button "
            value={9}
            onClick={props.displayNumber}
          >
            9
          </button>
        </div>
        <button className="zero-button" value={0} onClick={props.displayNumber}>
          0
        </button>
      </div>

      <div className="right-container">
        <button
          className="right-container-button"
          value="+"
          onClick={props.displayNumber}
        >
          +
        </button>
        <button
          className="right-container-button"
          value="-"
          onClick={props.displayNumber}
        >
          -
        </button>
        <button
          className="right-container-button"
          value="*"
          onClick={props.displayNumber}
        >
          x
        </button>
        <button
          className="right-container-button"
          value="/"
          onClick={props.displayNumber}
        >
          /
        </button>
        <button
          className="enter-button right-container-button"
          onClick={props.evaluate}
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default Buttons;
