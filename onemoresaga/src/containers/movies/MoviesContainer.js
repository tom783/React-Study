import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "store/actionCreator";
import ListTemplate from "components/base/templates/ListTemplate";

class MoviesContainer extends Component {
  componentDidMount() {}

  searchMoive = query => {
    console.log(query);
    Actions.getMovie(query);
  };

  render() {
    const { getApiReducer } = this.props;
    const { movie } = getApiReducer;

    return <ListTemplate movie={movie} searchMoive={this.searchMoive} />;
  }
}

export default connect(({ getApi }) => ({
  getApiReducer: getApi
}))(MoviesContainer);
