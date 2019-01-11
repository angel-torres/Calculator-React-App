import React from "react";
import ReactDOM from "react-dom";
import Display from "./components/Display";
import Number from "./components/Number";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: ""
    };
  }

  displayNumber = e => {
    this.setState({
      textInput: this.state.textInput + e.target.value
    });
  };

  evaluate = () => {
    return this.setState({
      textInput: eval(this.state.textInput)
    });
  };

  render() {
    return (
      <div className="App">
        <Display textInput={this.state.textInput} />
        <Number displayNumber={this.displayNumber} evaluate={this.evaluate} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
