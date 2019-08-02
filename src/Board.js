import React, { Component } from "react";
import Cell from "./Cell.js";

const validate = board => {
  let isValid = true;
  for (let i = 0; i < 4; i++) {
    const horizontal = new Set();
    const vertical = new Set();
    const square = new Set();
    for (let j = 0; j < 4; j++) {
      horizontal.add(board[i][j]);
      vertical.add(board[j][i]);
      square.add(
        board[2 * (i % 2) + (j % 2)][2 * Math.floor(i / 2) + Math.floor(j / 2)]
      );
    }
    horizontal.delete(0);
    vertical.delete(0);
    square.delete(0);
    if (horizontal.size !== 4 || vertical.size !== 4 || square.size !== 4) {
      isValid = false;
    }
  }
  return isValid;
};

class Board extends Component {
  state = {
    board: [[1, 2, 3, 4], [3, 4, 0, 0], [2, 0, 4, 0], [4, 0, 0, 2]],
    initial: [
      [true, true, true, true],
      [true, true, false, false],
      [true, false, true, false],
      [true, false, false, true]
    ],
    statusText: "",
    timer: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  submit = () => {
    const isValid = validate(this.state.board);
    this.setState({
      statusText: isValid ? "Board is complete !!" : "Board is invalid !!"
    });
  };

  render() {
    return (
      <div>
            <p className="timer">Elapsed Time: {this.state.timer} seconds</p>
        <div className="board">
          {this.state.board.map((row, rowIndex) =>
            row.map((number, columnIndex) => (
              <Cell
                number={number}
                key={`cell-${rowIndex}-${columnIndex}`}
                isInitial={this.state.initial[rowIndex][columnIndex]}
                onChange={newNumber => {
                  const { board } = this.state;
                  board[rowIndex][columnIndex] = newNumber;
                  this.setState({
                    board
                  });
                }}
              />
            ))
          )}
        </div>
        <button onClick={this.submit}>Submit</button>
        <p>{this.state.statusText}</p>
      </div>
    );
  }
}

export default Board;
