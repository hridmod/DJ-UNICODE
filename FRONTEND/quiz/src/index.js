import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./app.css";
class Quiz extends Component {
  render() {
    return (
      <div className="container">
        <div id="home" class="flex-center flex-column">
          <h1>Quick Quiz</h1>
          <a className="btn" href={"/game.html"}>
            Play
          </a>
          <a className="btn" href={"/highscores.html"}>
            High Scores
          </a>
        </div>
      </div>
    );
  }
}
