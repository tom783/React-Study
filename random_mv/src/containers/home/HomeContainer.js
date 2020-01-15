import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "store/actionCreator";
import { randomNumber as ranNum } from "utils";

class HomeContainer extends Component {
  state = {
    randomNumber: 0
  };
  handlePhoto = () => {
    //액션 실행함수
    Actions.getPhoto();
    this.setState({
      randomNumber: ranNum()
    });
  };

  handlePlace = () => {
    //액션 실행함수
    Actions.getPlace();
  };

  render() {
    const { getApiReducer } = this.props;
    const { photo, place } = getApiReducer;
    const { randomNumber } = this.state;
    const isNullPhoto = photo.data.length === 0;

    return (
      <div>
        <h1>toy project</h1>
        <button onClick={() => this.handlePhoto()}>photo</button>
        <button onClick={() => this.handlePlace()}>place</button>
        <h2>placeholder</h2>
        <div>{place.data.title}</div>
        <h2>Avengers</h2>
        <div>
          {!isNullPhoto && (
            <img
              src={`https://image.tmdb.org/t/p/w300${photo.data[randomNumber].poster_path}`}
            />
          )}
          {/* {photo.data &&
            photo.data.map(item => (
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
            ))} */}
        </div>
      </div>
    );
  }
}

export default connect(({ getApi }) => ({
  getApiReducer: getApi
}))(HomeContainer);
