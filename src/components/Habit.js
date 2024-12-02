import React from "react";

function Habit({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggleHabit(habit.id)} // Toggling completion
        aria-label="Mark as completed"
      />
      <span
        style={{
          textDecoration: habit.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {habit.name}
      </span>
      <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
    </li>
  );
}

export default Habit;
