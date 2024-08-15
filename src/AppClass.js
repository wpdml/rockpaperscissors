import React, { Component } from "react";
import "./App.css";
import Box from "./component/box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://m.media-amazon.com/images/I/51rOMX5z40L.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://eagawards.com/cdn/shop/products/36-giant-pink-ribbon-cutting-scissors-with-silver-blades_2048x.png?v=1681903589",
  },
  paper: {
    name: "Paper",
    img: "https://media0.giphy.com/media/ozf26DV8FqaCpkYt6n/giphy.gif?cid=6c09b95280cf6lqof5l7kh61pw9pm3nxwrrc7hzeas4xv52q&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    const userSelect = choice[userChoice];
    const computerSelect = this.randomChoice();
    const result = this.judgement(userSelect, computerSelect);
    
    this.setState({
      userSelect,
      computerSelect,
      result,
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "Win" : "Lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "Win" : "Lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "Win" : "Lose";
    }
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  render() {
    const { userSelect, computerSelect, result } = this.state;

    return (
      <div>
        <div className="main">
          <Box title="You" item={userSelect} result={result} />
          <Box
            title="Computer"
            item={computerSelect}
            result={
              result === "Win" ? "Lose" : result === "Lose" ? "Win" : "Tie"
            }
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>✂️</button>
          <button onClick={() => this.play("rock")}>🪨</button>
          <button onClick={() => this.play("paper")}>📄</button>
        </div>
      </div>
    );
  }
}
