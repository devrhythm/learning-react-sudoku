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
    board: [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]
  };
  render() {
    return (
      <div className="board">
        <Cell number={this.state.board[0][0]} isInitial={true} />
        <Cell number={this.state.board[0][1]} />
        <Cell number={this.state.board[0][2]} />
        <Cell number={this.state.board[0][3]} isInitial />
        <Cell number={this.state.board[1][0]} />
        <Cell number={this.state.board[1][1]} />
        <Cell number={this.state.board[1][2]} />
        <Cell number={this.state.board[1][3]} />
        <Cell number={this.state.board[2][0]} />
        <Cell number={this.state.board[2][1]} />
        <Cell number={this.state.board[2][2]} isInitial />
        <Cell number={this.state.board[2][3]} />
        <Cell number={this.state.board[3][0]} isInitial />
        <Cell number={this.state.board[3][1]} />
        <Cell number={this.state.board[3][2]} />
        <Cell number={this.state.board[3][3]} />
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
