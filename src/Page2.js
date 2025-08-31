import React, { useState } from "react";
import bg from "./assets/background2.png";

function Page2({ moods, selectedDay, setSelectedDay, onSubmit }) {
  const today = new Date();
  const currentYear = today.getFullYear();

  const [note, setNote] = useState("");
  const [selectedBrew, setSelectedBrew] = useState("");
  const [pendingDay, setPendingDay] = useState(null);

  const brews = [
    { name: "light latte", class: "light-latte" },
    { name: "caramel", class: "caramel" },
    { name: "medium", class: "medium" },
    { name: "dark", class: "dark" },
    { name: "espresso", class: "espresso" },
  ];

  const monthNames = [
    "january","february","march","april","may","june",
    "july","august","september","october","november","december"
  ];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  const formatDate = (year, month, day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const handleSubmit = () => {
    if (!selectedDay || !selectedBrew) return;
    onSubmit(selectedDay, selectedBrew, note);
    setSelectedBrew("");
    setNote("");
    setPendingDay(null);
    setSelectedDay(null);
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
            const isPending = pendingDay === dateKey && !mood;
            const isSelected = selectedDay === dateKey;

            let brewClass = "";
            if (mood) {
              brewClass = `filled-${mood.brew.replace(" ", "-")}`;
            } else if (isPending) {
              brewClass = "pending-hover";
            }

            return (
              <div
                key={dateKey}
                className={`day-box ${brewClass} ${isSelected ? "selected" : ""}`}
                onClick={() => {
                  if (pendingDay === dateKey) {
                    setPendingDay(null);
                    setSelectedDay(null);
                  } else {
                    setPendingDay(dateKey);
                    setSelectedDay(dateKey);
                  }
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }

  const selectedMood = selectedDay ? moods[selectedDay] : null;

  return (
    <div
      className="page2"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="strip strip-left" style={{ marginTop: "20px" }}>
        <p className="typing-large">Add your brew...</p>
        <div className="brew-options">
          {brews.map((brew) => (
            <button
              key={brew.name}
              className={`brew-button ${brew.class} ${selectedBrew === brew.name ? "selected" : ""}`}
              onClick={() =>
                setSelectedBrew(selectedBrew === brew.name ? "" : brew.name)
              }
            >
              {brew.name}
            </button>
          ))}
        </div>

        <textarea
          className="note-field"
          placeholder="Add a note..."
          maxLength={100}
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

      <div className="strip strip-right">
        <div className="heatmap">{renderedMonths}</div>
      </div>
    </div>
  );
}

export default Page2;
