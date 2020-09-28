import React from "react";

export const Result = (props) => {
  return (
    <div className="result">
      <h1>Result</h1>
      <h2>Your score is {props.score} / 5</h2>
      <button onClick={props.playAgain}>Play Again</button>
    </div>
  );
};
