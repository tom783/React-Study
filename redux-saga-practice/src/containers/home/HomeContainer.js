import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "store/actionCreators";

class HomeContainer extends Component {
  handleClick = value => {
    if (value === "test") {
      Actions.getPost();
    }
  };
  render() {
    const { postReducer } = this.props;
    const {
      test: { data }
    } = postReducer;
    return (
      <div>
        <h1>Test</h1>
        <p>{postReducer.test.number}</p>
        <button onClick={() => this.handleClick("test")}>연습 테스팅</button>
        <div>
          {data && data.map((list, idx) => <div key={idx}>{list.title}</div>)}
        </div>
      </div>
    );
  }
}

export default connect(({ post }) => ({
  postReducer: post
}))(HomeContainer);
