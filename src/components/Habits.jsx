import React from "react";
import Draggable from "./Draggable";
import Habit from "./Habit";

const Habits = () => {
  return (
    <Draggable title="Habit">
      <Habit />
    </Draggable>
  );
};

export default Habits;
