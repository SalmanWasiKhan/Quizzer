import React, { Component } from "react";
import Question from "./Question";
import { Result } from "./Result";
import quizService from "../quizService";

export class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      asked: 0,
      score: 0,
      questions: [],
    };
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = () => {
    quizService().then((questions) => {
      this.setState({
        questions: questions,
      });
    });
  };

  selected = (score) => {
    this.setState((prevState) => ({
      score: prevState.score + score,
      asked: prevState.asked + 1,
    }));
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      asked: 0,
    });
  };

  render() {
    return (
      <div className="body">
        {this.state.asked < 5 ? (
          this.state.questions.map((question, index) => {
            return (
              <Question
                key={question.id}
                index={index}
                data={question}
                selected={this.selected}
              />
            );
          })
        ) : (
          <Result score={this.state.score} playAgain={this.playAgain} />
        )}
      </div>
    );
  }
}

export default Body;
