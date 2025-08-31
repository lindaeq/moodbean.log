import React, { useState } from "react";

function Page2({ moods, selectedDay, setSelectedDay, onSubmit }) {
  const today = new Date();
  const currentYear = today.getFullYear();

  const [note, setNote] = useState("");
  const [selectedBrew, setSelectedBrew] = useState("");
  const [pendingDay, setPendingDay] = useState(null);
  const [hoveredNoBrewDay, setHoveredNoBrewDay] = useState(null);

  const brews = [
    { name: "light latte", class: "light-latte" },
    { name: "caramel", class: "caramel" },
    { name: "medium", class: "medium" },
    { name: "dark", class: "dark" },
    { name: "espresso", class: "espresso" },
  ];

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  const formatDate = (year, month, day) =>
    `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;

  const handleBrewClick = (brewName) => {
    setSelectedBrew(prev => prev === brewName ? "" : brewName);
  };

  const handleSquareClick = (dateKey) => {
    if (selectedBrew) {
      // Pending brew
      if (pendingDay === dateKey) setPendingDay(null);
      else setPendingDay(dateKey);
      setSelectedDay(dateKey);
      // Do not clear hoveredNoBrewDay
    } else {
      // No brew → toggle pending hover
      if (hoveredNoBrewDay === dateKey) {
        setHoveredNoBrewDay(null); // toggle off
      } else {
        setHoveredNoBrewDay(dateKey); // toggle on
      }
      setSelectedDay(dateKey);
    }
  };

  const handleSubmit = () => {
    if (!selectedDay || !selectedBrew) return;
    onSubmit(selectedDay, selectedBrew, note);
    setSelectedBrew("");
    setNote("");
    setPendingDay(null);
    setHoveredNoBrewDay(null); // clear after submit
  };

  const renderedMonths = [];
  for (let m = 0; m <= today.getMonth(); m++) {
    renderedMonths.push(
      <div key={m} className="month-block">
        <h3>{monthNames[m]}</h3>
        <div className="month-grid">
          {Array.from({ length: firstDayOfMonth(currentYear, m) }).map((_, i) => (
            <div key={`empty-${i}`} className="day-box empty"></div>
          ))}
          {Array.from({ length: daysInMonth(currentYear, m) }, (_, d) => {
            const day = d + 1;
            const dateKey = formatDate(currentYear, m, day);
            const mood = moods[dateKey];
            const isPending = pendingDay === dateKey && selectedBrew;
            const isHoveredNoBrew = hoveredNoBrewDay === dateKey && !selectedBrew;
            const brewClass = mood
              ? `filled-${mood.brew.replace(" ","-")}`
              : isPending
              ? `pending-${selectedBrew.replace(" ","-")}`
              : isHoveredNoBrew
              ? "pending-hover"
              : "";

            return (
              <div
                key={dateKey}
                className={`day-box ${brewClass}`}
                onClick={() => handleSquareClick(dateKey)}
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
      <div className="strip strip-left" style={{ marginTop: "10px" }}>
        <p className="typing-large">Add your brew...</p>
        <div className="brew-options" style={{ marginBottom: "20px" }}>
          {brews.map(brew => (
            <button
              key={brew.name}
              className={`brew-button ${brew.class} ${selectedBrew === brew.name ? "selected" : ""}`}
              onClick={() => handleBrewClick(brew.name)}
            >
              {brew.name}
            </button>
          ))}
        </div>

        <textarea
          className="note-field"
          placeholder="Add a note..."
          value={note}
          onChange={e => setNote(e.target.value.slice(0,100))}
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
              <p><strong className="inter-label">brew:</strong> {selectedMood?.brew || selectedBrew || "-"}</p>
              <p><strong className="inter-label">note:</strong> {selectedMood?.note || note || "-"}</p>
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
