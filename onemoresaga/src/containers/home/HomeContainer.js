import React, { Component, useEffect } from "react";
import { Actions } from "store/actionCreator";
import { connect } from "react-redux";
import ListTemplate from "components/base/templates/ListTemplate";
//
import ToggleBtnG from "components/base/toggleBtnG/ToggleBtnG";
import {Slider} from 'components/base/slider';
import UserInfoTemplate from 'components/base/templates/UserInfoTemplate';
import {TxtInput} from 'components/base/txtInput';
import {makeOjb} from 'lib/util';
// 
const btnConfig = {
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
          direction: "moveRight",
          duration: 0.3,
          disabled: [],
      },
    labelCont: {
      cont: "text:Label",
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
const sliderConfig = {
        _style: {
            wrapPadding: 15,
            sliderWidth: 300,
            sliderHeight: 150,
            sliderItemGap: 10,
            carouselPadding: 25,
            carouselWidth: 16,
            carouselHeight: 16,
            carouselItemGap: 10,
            carouselItemShape: "circle",
            arrowWidth: 70,
            arrowHeight: 100,
        },
        content: {
            slider: ["img:https://i.pinimg.com/236x/ae/c9/ea/aec9eadd89aa51a9b753b221f3bcce12.jpg", "text:2", "text:3"],
            carousel: "text:number",
            arrowPrev: "text:prev",
            arrowNext: "text:next",
        },
        effect: {
            duration: 0.7,
            acceleration: "ease",
        },
        useComponent: false,
   }



const compoConfig = makeOjb("txtInput");
const HomeContainer = (props) => {
  useEffect(() =>{
    
  }, []);

  const { getApiReducer } = props;
  const { movie, news, place } = getApiReducer;

  return (
      <>
        <div>HomeContainer</div>
        {/* <ToggleBtnG {...btnConfig} /> */}
        {/* <Slider {...sliderConfig} /> */}
        <UserInfoTemplate config={compoConfig} _Input={TxtInput}>
          Title
        </UserInfoTemplate>
      </>
  );
};


export default connect(({ getApi }) => ({
  getApiReducer: getApi
}))(HomeContainer);