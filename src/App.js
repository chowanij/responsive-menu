import React, { Component } from 'react';
import logo from './logo.svg';
import Toolbar from './components/Toolbar/Toolbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <main style={{marginTop: '64px'}}>
          <p>
            this is the page content
          </p>
        </main>
      </div>
    );
  }
}

export default App;
