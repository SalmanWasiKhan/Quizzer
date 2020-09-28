import React, { useState } from "react";

function Question(props) {
  const [Selected, setSelected] = useState(null);
  const [Disabled, setDisabled] = useState(false);

  const data = props.data;

  const selected = (option) => {
    setSelected(option);
    setDisabled(true);
    props.selected(props.data.correct === option ? 1 : 0);
  };

  return (
    <div className="question">
      <span>{props.index + 1}</span>
      <p>{data.question}</p>
      <div className="options">
        {data.options.map((option) => {
          return (
            <button
              key={option}
              disabled={Selected === option ? Disabled : Disabled}
              className={Selected === option ? "selected" : null}
              onClick={() => selected(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Question);
