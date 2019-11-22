import React, { Component } from 'react';
import {socket} from '../containers/websocket';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          webSocket Test
        </h1>
        <button onClick={socket}>start</button>
      </div>
    );
  }
}

export default App;