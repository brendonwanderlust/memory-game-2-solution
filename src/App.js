import React, { Component } from 'react';
import './App.css';

import MemoryCard from './MemoryCard.js' 

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <p className="App-subtitle">Match Cards To Win</p>
        </header>

        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        
      </div>
    );
  }
}

export default App;
