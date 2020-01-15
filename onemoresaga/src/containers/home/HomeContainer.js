import React, { Component, useEffect } from "react";
import { Actions } from "store/actionCreator";
import { connect } from "react-redux";
import ListTemplate from "components/base/templates/ListTemplate";

const HomeContainer = (props) => {
  useEffect(() =>{
    Actions.getMovie("");
    Actions.getNews("kr");
    Actions.getPlace("comments");
  }, []);

  const { getApiReducer } = props;
  const { movie, news, place } = getApiReducer;

  return (
      <>
        <div>HomeContainer</div>
        <div></div>
      </>
  );
};


export default connect(({ getApi }) => ({
  getApiReducer: getApi
}))(HomeContainer);