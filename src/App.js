import React, { Component } from "react";
import "./App.css";

class Cell extends Component {
  state = {
    number: 1
  };
  render() {
    return (
      <div
        onClick={e => {
          this.setState({
            number: (this.props.number + 1) % 5
          });
        }}
        className={`cell ${this.props.isInitial ? "initial" : ""}`}
      >
        {this.props.number !== 0 && this.props.number}
      </div>
    );
  }
}

class Board extends Component {
  state = {
    board: [[1, 2, 3, 4], [3, 4, 0, 0], [2, 0, 4, 0], [4, 0, 0, 2]],
    initial: [
      [true, true, true, true],
      [true, true, false, false],
      [true, false, true, false],
      [true, false, false, true]
    ]
  };
  render() {
    return (
      <div className="board">
        {this.state.board.map((row, rowIndex) =>
          row.map((number, columnIndex) => (
            <Cell
              number={number}
              key={`cell-${rowIndex}-${columnIndex}`}
              isInitial={this.state.initial[rowIndex][columnIndex]}
            />
          ))
        )}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
