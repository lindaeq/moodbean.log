import React, { useState } from "react";

function Page2({ moods, selectedDay, setSelectedDay, onSubmit }) {
  const today = new Date();
  const currentYear = today.getFullYear();

  const [note, setNote] = useState("");
  const [selectedBrew, setSelectedBrew] = useState("");

  const brews = [
    { name: "light latte", class: "light-latte" },
    { name: "caramel", class: "caramel" },
    { name: "medium", class: "medium" },
    { name: "dark", class: "dark" },
    { name: "espresso", class: "espresso" },
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = (year, month) =>
    new Date(year, month, 1).getDay();

  const formatDate = (year, month, day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;

  const handleSubmit = () => {
    if (!selectedDay || !selectedBrew) return;
    onSubmit(selectedDay, selectedBrew, note);
    setSelectedBrew("");
    setNote("");
  };

  const renderedMonths = [];
  for (let m = 0; m <= today.getMonth(); m++) {
    renderedMonths.push(
      <div key={m} className="month-block">
        <h3>{monthNames[m]}</h3>
        <div className="month-grid">
          {Array.from({ length: firstDayOfMonth(currentYear, m) }).map(
            (_, i) => (
              <div key={`empty-${i}`} className="day-box empty"></div>
            )
          )}
          {Array.from({ length: daysInMonth(currentYear, m) }, (_, d) => {
            const day = d + 1;
            const dateKey = formatDate(currentYear, m, day);
            const mood = moods[dateKey];
            const isSelected = selectedDay === dateKey;
            const brewClass = mood ? `filled-${mood.brew.replace(" ", "-")}` : "";

            return (
              <div
                key={dateKey}
                className={`day-box ${brewClass} ${
                  isSelected && !mood ? "selected" : ""
                }`}
                onClick={() => setSelectedDay(dateKey)}
              />
            );
          })}
        </div>
      </div>
    );
  }

  const selectedMood = selectedDay ? moods[selectedDay] : null;

  return (
    <div className="page2">
      {/* Left column */}
      <div className="strip strip-left">
        <p className="typing-large">Add your brew...</p>
        <div className="brew-options">
          {brews.map((brew) => (
            <button
              key={brew.name}
              className={`brew-button ${brew.class} ${
                selectedBrew === brew.name ? "selected" : ""
              }`}
              onClick={() => setSelectedBrew(brew.name)}
            >
              {brew.name}
            </button>
          ))}
        </div>

        <textarea
          className="note-field"
          placeholder="add a note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={!selectedBrew}
        >
          submit
        </button>
      </div>

      {/* Middle column */}
      <div className="strip strip-middle">
        <div className="header">
          {selectedDay ? (
            <>
              <h2>
                {new Date(selectedDay).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </h2>
              <p>
                <strong className="inter-label">brew:</strong>{" "}
                {selectedMood?.brew || selectedBrew || "-"}
              </p>
              <p>
                <strong className="inter-label">note:</strong>{" "}
                {selectedMood?.note || note || "-"}
              </p>
            </>
          ) : (
            <h2>{today.toDateString()}</h2>
          )}
        </div>
      </div>

      {/* Right column */}
      <div className="strip strip-right">
        <div className="heatmap">{renderedMonths}</div>
      </div>
    </div>
  );
}

export default Page2;
