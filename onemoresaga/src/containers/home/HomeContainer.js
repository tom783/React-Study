import React, { Component, useEffect } from "react";
import { Actions } from "store/actionCreator";
import { connect } from "react-redux";
import ListTemplate from "components/base/templates/ListTemplate";
import ToggleBtnG from "../../components/base/toggleBtnG/ToggleBtnG";

// 
const config = {
  useChildKey: ["home", "movie", "news", "place"],
  _style: {
          width: 50,
          height: 50,
          gap: 10,
          shape: "circle",
          bgColor: {
              label: "#abab",
              home: "#fff",
              movie: "#000",
              news: "yellow",
              place: "#dfdf"
          }, 
          direction: "left",
          disabled: ['movie', 'home'],
      },
    labelCont: {
      cont: "img:https://i.pinimg.com/236x/ae/c9/ea/aec9eadd89aa51a9b753b221f3bcce12.jpg",
      effect: 'ro'
    },
    content: {
      home: "img:https://i.pinimg.com/236x/ae/c9/ea/aec9eadd89aa51a9b753b221f3bcce12.jpg",
      movie: "text:Movie",
      news: "text:News",
      place: "img:https://i.pinimg.com/236x/ae/c9/ea/aec9eadd89aa51a9b753b221f3bcce12.jpg",
    },
    childUrl: {
        home: "/",
        movie: "/movies",
        news: "/news",
        place: "/place",
    },
}
// 

const HomeContainer = (props) => {
  useEffect(() =>{
    
  }, []);

  const { getApiReducer } = props;
  const { movie, news, place } = getApiReducer;

  return (
      <>
        <div>HomeContainer</div>
        <span>test</span>
        <ToggleBtnG {...config} />
      </>
  );
};


export default connect(({ getApi }) => ({
  getApiReducer: getApi
}))(HomeContainer);