import React, { Component } from "react";
import { Actions } from "store/actionCreator";
import { connect } from "react-redux";
import HeaderComponent from "components/base/header";

const HeaderContainer = () => {
  return (
    <>
        <HeaderComponent />
      </>
  );
};

export default connect(({ getApi }) => ({
  getApiReducer: getApi
}))(HeaderContainer);
