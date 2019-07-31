import React, { Component } from 'react';
import './App.css';

class Cell extends Component {
  render() {
    return (<div className="cell">1</div>)
  }
}

function App() {
  return (
    <div className="App">
      <div className="board">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
}

export default App;
