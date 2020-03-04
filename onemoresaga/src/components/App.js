import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/home";
import Movies from "pages/movies";
import News from "pages/news";
import Place from "pages/place";

import test from 'pages/test';
import {Slide} from 'components/common/slide';

// 스크롤 애니메이션 0.5초
const config={
  ANIM_DURATION : 300,
  FRAME_TIME : 10,
  width:500,
  height:500,
};
const list =[
  {
    id:0,
    src:"http://www.motorian.kr/wp-content/uploads/2014/02/20.jpg",
  },
  {
    id:1,
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmTUx_IQm2XaqhifkCQ1sdyB0jShCnFonzMSeWIMeWuU8djcCmw&s",
  },
  {
    id:2,
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlal8aSz0thYg99X7Kh6GgJbzIGJkjeR1UYQeY_J8BKbs3aqD&s",
  }
];

class App extends Component {
  render() {
    return (
      // <>
      
      // <Slide 
      //   config={config}
      //   list={list}
      // />
      // </>
      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/news" component={News} />
        <Route path="/place" component={Place} />
        <Route path="/test" component={test} />
        
      </Switch>
    );
  }
}

export default App;



