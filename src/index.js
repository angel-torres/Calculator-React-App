import React from "react";
import ReactDOM from "react-dom";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Header from "./components/Header";

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

  clearScreen = () => {
    return this.setState({
      textInput: ""
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Display textInput={this.state.textInput} />
        <Buttons
          displayNumber={this.displayNumber}
          evaluate={this.evaluate}
          clearScreen={this.clearScreen}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
