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
            number: (this.state.number + 1) % 5
          });
        }}
        className={`cell ${this.props.isInitial ? 'initial':''}`}
      >
        {this.state.number !== 0 && this.state.number}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="board">
        <Cell number={2} isInitial={true} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} isInitial />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} isInitial />
        <Cell number={1} />
        <Cell number={1} isInitial />
        <Cell number={1} />
        <Cell number={1} />
        <Cell number={1} />
      </div>
    </div>
  );
}

export default App;
