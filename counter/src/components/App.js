import React, { Component } from "react";
import AppTemplate from "./templates/AppTemplate";
import CounterContainer from "../containers/CounterContainer";

class App extends Component {
  render() {
    return <AppTemplate counter={<CounterContainer />} />;
  }
}

export default App;
