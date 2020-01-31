import React from "react";

const Todo = props => {
  const handleClick = () => {
    props.toggleComplete(props.item.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`task${props.item.complete ? " complete" : ""}`}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
