import React from "react";

export default function MoodList({ moods }) {
  return (
    <div className="mood-list">
      <h2>Your Coffee Journal</h2>
      {moods.length === 0 ? (
        <p>No brews logged yet ☕</p>
      ) : (
        <ul>
          {moods.map((m) => (
            <li key={m.id}>
              <strong>{m.date}</strong> — {m.roast.toUpperCase()} Roast  
              <p>{m.note}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
