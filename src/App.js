import React, { Component } from 'react';
import './styles/App.css';
import './styles/Content.css';
import Header from './components/Header.js';
import Tabs from './components/Tabs.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Tabs/>
      </div>
    );
  }
}

export default App;
