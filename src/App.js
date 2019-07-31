import React, { Component } from 'react';
import './App.css';

class Cell extends Component {
  render() {
    return (<div className="cell">{this.props.number}</div>)
  }
}

function App() {
  return (
    <div className="App">
      <div className="board">
        <Cell number={2} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
      </div>
    </div>
  );
}

export default App;
