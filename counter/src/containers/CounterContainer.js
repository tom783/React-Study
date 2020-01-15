import React, { Component } from "react";
import Counter from "../components/Counter";
import * as counterActions from "../store/modules/counter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class CounterContainer extends Component {
  increaseF = () => {
    const { counterActions } = this.props;
    counterActions.increase();
  };
  decreaseF = () => {
    const { counterActions } = this.props;
    counterActions.decrease();
  };

  timeNum = () => {
    console.log("comdidmount");
    const { counterActions } = this.props;
    let { number } = this.props;
    const timeF = setInterval(() => {
      counterActions.timeincrease(1);
      console.log(this.props.number);
      if (this.props.number === 60) {
        clearInterval(timeF);
      }
    }, 1000);

    return number;
  };

  componentDidMount() {
    this.timeNum();
  }

  render() {
    return (
      <Counter
        i_f={this.increaseF}
        d_f={this.decreaseF}
        num={this.props.number}
      />
    );
  }
}

// 리덕스 연결
export default connect(
  state => ({
    number: state.counter.number
  }),
  dispatch => {
    return { counterActions: bindActionCreators(counterActions, dispatch) };
    // bindActionCreators는 Action 생성자 함수객체를 반환
  }
)(CounterContainer);
