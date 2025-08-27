import React, { useState } from "react";
import MoodForm from "./components/MoodForm";
import MoodList from "./components/MoodList";
import MoodChart from "./components/MoodChart";
import "./App.css";

import MoodCalendar from "./components/MoodCalendar";

function App() {
  const [moods, setMoods] = useState([]);

  const addMood = (moodEntry) => {
    setMoods([moodEntry, ...moods]);
  };

  return (
    <div className="App">
      <h1>☕ Coffee Mood Tracker</h1>
      <MoodForm addMood={addMood} />
      <MoodChart moods={moods} />
      <MoodCalendar moods={moods} />
      <MoodList moods={moods} />
    </div>
  );
}

export default App;
