import React, { useState } from "react";
import "./MoodForm.css";

export default function MoodForm({ addMood }) {
  const [roast, setRoast] = useState("medium");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0] // default: today
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      roast,
      note,
      date,
    };
    addMood(newEntry);
    setNote("");
    setRoast("medium");
  };

  const roastOptions = [
    { value: "blonde", label: "Blonde Roast ☕", color: "#DAB894" },
    { value: "medium", label: "Medium Roast ☕", color: "#A9745B" },
    { value: "dark", label: "Dark Roast ☕", color: "#5C4033" },
    { value: "espresso", label: "Espresso ☕", color: "#3C2A21" },
    { value: "decaf", label: "Decaf ☕", color: "#BFA6A0" },
  ];

  return (
    <form className="mood-form" onSubmit={handleSubmit}>
      <h2>Add Your Daily Brew</h2>

      <label>
        Select Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <div className="roast-options">
        {roastOptions.map((r) => (
          <button
            type="button"
            key={r.value}
            className={`roast-btn ${roast === r.value ? "active" : ""}`}
            style={{ backgroundColor: roast === r.value ? r.color : "#eee" }}
            onClick={() => setRoast(r.value)}
          >
            {r.label}
          </button>
        ))}
      </div>

      <textarea
        placeholder="Add a note about your day..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button type="submit" className="submit-btn">
        Add Brew
      </button>
    </form>
  );
}
