import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./App.css";
import isNumber from "../logic/isNumber";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { value: "0" };
  }
  handleClick = buttonName => {
    if (buttonName) {
      if (buttonName === "AC") {
        this.setState({ value: "0" });
      } else if (buttonName === "=") {
        console.log("this.state.value ", this.state.value);
        let newValue = this.state.value;
        console.log("newValue.includes('x') ", newValue.includes("x"));
        if (newValue.includes("x")) {
          newValue = newValue.replace(/x/gi, "*");
        }
        if (newValue.includes("÷")) {
          newValue = newValue.replace(/÷/gi, "/");
        }
        this.setState({ value: String(eval(newValue)) });
      } else {
        // console.log(1);
        if (this.state.value === "0") {
          this.setState({ value: buttonName });
        } else {
          if (buttonName === "(") {
            const lengthVal = this.state.value.length;
            // console.log('lengthVal ', lengthVal);
            const lastElementVal = this.state.value[lengthVal - 1];
            const lastValIsNumber = isNumber(lastElementVal);
            if (lastValIsNumber) {
              buttonName = "x(";
            }
          }
          this.setState({ value: this.state.value + buttonName });
        }
      }
    }
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.value} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
