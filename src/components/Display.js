import React from "react";
import "./ComponentStyles.css";

function Display(props) {
  return (
    <div className="display" value={props.textInput} name="inputText">
      {props.textInput}
    </div>
  );
}

export default Display;
