import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!habitName.trim()) {
      alert("Please enter a valid habit!");
      return;
    }

    const newHabit = {
      id: Date.now(),
      name: habitName,
      completed: false, // Change from 'did' to 'completed' to match the data structure
    };

    onAddHabit(newHabit);
    setHabitName("");  // Clear the input field after submitting
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Habit"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}
