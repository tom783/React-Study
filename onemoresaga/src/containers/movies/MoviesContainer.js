import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "store/actionCreator";
import ListTemplate from "components/base/templates/ListTemplate";
import WithContainer from "../base/WithContainer";

// const MoviesContainer = (props) => {
  
//   const searchMoive = query => {
//     console.log(query);
//     Actions.getMovie(query);
//   };
//   const { getApiReducer } = props;
//   const { movie } = getApiReducer;

//   return <ListTemplate movie={movie} searchMoive={searchMoive} />;
// };

// export default connect(({ getApi }) => ({
//   getApiReducer: getApi
// }))(MoviesContainer);


const MoviesContainer = () => {
  return <WithContainer containerKey='movie' actionsF={Actions.getMovie} />
};

export default MoviesContainer;


