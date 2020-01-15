import React, { Component } from "react";
import HomeTemplate from "components/base/templates/HomeTemplate";
import HomeContainer from "containers/home/HomeContainer";

class Home extends Component {
  render() {
    return (
      <HomeTemplate>
        <HomeContainer />
      </HomeTemplate>
    );
  }
}

export default Home;
