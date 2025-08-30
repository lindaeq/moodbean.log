import React, { useState } from "react";
import MoodForm from "./components/MoodForm";
import MoodCalendar from "./components/MoodCalendar";
import MoodList from "./components/MoodList";
import MoodChart from "./components/MoodChart";

import "./App.css";

export default function App() {
  const [moods, setMoods] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const addMood = (newEntry) => {
    setMoods((prev) => [...prev, newEntry]);
  };

  const selectedMood = moods.find((m) => m.date === selectedDate);

  const formatFriendlyDate = (dateStr) => {
    if (!dateStr) return "";
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className="app-container">
      {/* Left Panel: Add Brew Form */}
      <div className="left-panel">
        <MoodForm addMood={addMood} />
      </div>

      {/* Middle Panel: Note Display */}
      <div className="middle-panel">
        <div style={{ width: "100%" }}>
          {selectedMood ? (
            <>
              <h3 style={{ fontSize: "0.85rem" }}>Note for {formatFriendlyDate(selectedMood.date)}</h3>
              <p><strong>Roast:</strong> {selectedMood.roast.toUpperCase()}</p>
              <p><strong>Note:</strong> {selectedMood.note || "No note"}</p>
            </>
          ) : (
            <p style={{ fontSize: "0.75rem" }}>Click a calendar square to see your note ☕</p>
          )}
        </div>

        {/* Placeholder box for future widget */}
        <div className="widget-placeholder"></div>
      </div>

      {/* Right Panel: Calendar */}
      <div className="right-panel">
        <MoodCalendar
          moods={moods}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </div>
  );
}