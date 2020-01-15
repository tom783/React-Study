import React, { Component } from "react";
import { Actions } from "store/actionCreator";
import { connect } from "react-redux";
import FooterComponent from "components/base/footer";

class FooterContainer extends Component {
  render() {
    return (
      <>
        <FooterComponent />
      </>
    );
  }
}

export default connect(({ getApi }) => ({
  getApiReducer: getApi
}))(FooterContainer);
