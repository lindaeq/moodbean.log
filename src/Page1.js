import React, { useState } from "react";
import bg from "./assets/background.png"; // import the image

function Page1({ onSubmit }) {
  const [note, setNote] = useState("");
  const [selectedBrew, setSelectedBrew] = useState("");
  const maxChars = 300;
  const charsLeft = maxChars - (note?.length || 0);

  const brews = [
    { name: "light latte", class: "light-latte" },
    { name: "caramel", class: "caramel" },
    { name: "medium", class: "medium" },
    { name: "dark", class: "dark" },
    { name: "espresso", class: "espresso" },
  ];

  const handleSubmit = () => {
    if (!selectedBrew) return;
    const date = new Date().toISOString().split("T")[0];
    onSubmit(date, selectedBrew, note);
    setNote("");
    setSelectedBrew("");
  };

  return (
    <div
      className="page1"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="page1-header">
        <h1 className="logo">moodbean.log</h1>
        <p className="subtitle">how are you feeling today?</p>
      </div>

      <div className="brew-section">
        <p className="typing-text">Add your brew...</p>

        <div className="brew-options">
          {brews.map((brew) => (
            <button
              key={brew.name}
              className={`brew-button ${brew.class} ${
                selectedBrew === brew.name ? "selected" : ""
              }`}
              onClick={() =>
                setSelectedBrew(
                  selectedBrew === brew.name ? "" : brew.name
                )
              }
            >
              {brew.name}
            </button>
          ))}
        </div>

        <textarea
          className="note-field"
          placeholder="Add a note..."
          maxLength={maxChars}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        {/* Character counter */}
        <small style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 12, color: "#999" }}>
          {charsLeft} characters left
        </small>

        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={!selectedBrew}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Page1;
