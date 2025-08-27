import React from "react";
import "./MoodCalendar.css";

export default function MoodCalendar({ moods }) {
  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const today = new Date();

  // Generate all dates in the year
  const days = [];
  let current = new Date(startOfYear);
  while (current <= today) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  // Map moods by date (YYYY-MM-DD → roast)
  const moodMap = {};
  moods.forEach((m) => {
    moodMap[m.date] = m.roast;
  });

  const roastColors = {
    blonde: "#DAB894",
    medium: "#A9745B",
    dark: "#5C4033",
    espresso: "#3C2A21",
    decaf: "#BFA6A0",
  };

  return (
    <div className="mood-calendar">
      <h2>Your Year in Coffee</h2>
      <div className="calendar-grid">
        {days.map((day, i) => {
          const dateStr = day.toISOString().split("T")[0];
          const roast = moodMap[dateStr];
          return (
            <div
              key={i}
              className="calendar-cell"
              title={`${dateStr} - ${roast || "No brew logged"}`}
              style={{
                backgroundColor: roast ? roastColors[roast] : "#eee",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
