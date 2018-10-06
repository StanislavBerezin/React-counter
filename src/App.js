import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>This app used redux instead of local state</li>
        </ol>
        <Persons />
      </div>
    );
  }
}

export default App;
