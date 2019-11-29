import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = {
  Navbar: styled.ul`
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  `,
  List: styled.li`
    float: left;
    width: calc(100% / 4);
  `
};

class HeaderContainer extends Component {
  render() {
    return (
      <Styled.Navbar>
        <Styled.List>
          <Link to="/">Home</Link>
        </Styled.List>
        <Styled.List>
          <Link to="/movies">Movies</Link>
        </Styled.List>
        <Styled.List>
          <Link to="/news">News</Link>
        </Styled.List>
        <Styled.List>
          <Link to="/place">Place</Link>
        </Styled.List>
      </Styled.Navbar>
    );
  }
}

export default HeaderContainer;
