import React, { Component } from "react";

class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <div>Header</div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default HomeTemplate;
