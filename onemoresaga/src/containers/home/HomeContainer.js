import React, { Component } from "react";
import { Actions } from "store/actionCreator";
import { connect } from "react-redux";

class HomeContainer extends Component {
  onMoive = () => {
    Actions.getMovie("avengers");
  };

  onNews = () => {
    Actions.getNews("kr");
  };

  onPlace = () => {
    Actions.getPlace("comments");
  };

  render() {
    return (
      <>
        <div>HomeContainer</div>
        <button onClick={this.onMoive}>movie</button>
        <button onClick={this.onNews}>news</button>
        <button onClick={this.onPlace}>place</button>
      </>
    );
  }
}

export default connect(({ getApi }) => ({
  getApiReducer: getApi
}))(HomeContainer);
