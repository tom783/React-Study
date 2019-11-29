import React, { Component } from "react";
import styled from "styled-components";
import Pending from "components/base/pending";
import { produce } from "immer";

class ListTemplate extends Component {
  state = {
    searchValue: ""
  };

  inputValue = e => {
    this.setState({ searchValue: e.target.value });
    console.log(this.state.searchValue);
  };

  searchFun = e => {
    e.preventDefault();
    console.log(this.state.searchValue);
    this.props.searchMoive(this.state.searchValue);
    this.setState({ searchValue: "" });
  };

  prevent = e => {
    e.preventDefault();
  };

  render() {
    const { movie } = this.props;
    const { movieData, pending } = movie;

    return (
      <>
        <div>
          <form onClick={this.prevent}>
            <input
              type="text"
              placeholder="input search query"
              onChange={this.inputValue}
              value={this.state.searchValue}
            />
            <button type="submit" onClick={this.searchFun}>
              search
            </button>
          </form>
        </div>
        <ul>
          {!pending ? (
            movieData.length !== 0 &&
            movieData.map((item, index) => (
              <li key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                />
              </li>
            ))
          ) : (
            <Pending />
          )}
        </ul>
      </>
    );
  }
}

export default ListTemplate;
