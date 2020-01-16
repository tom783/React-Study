import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/home";
import Movies from "pages/movies";
import News from "pages/news";
import Place from "pages/place";

import test from 'pages/test';


class App extends Component {
  render() {
    return (
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
