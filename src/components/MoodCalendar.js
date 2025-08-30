import React from "react";

export default function MoodCalendar({ moods, selectedDate, setSelectedDate }) {
  const year = new Date().getFullYear();

  const formatDate = (d) => new Date(d).toISOString().split("T")[0];

  const moodMap = {};
  moods.forEach((m) => {
    moodMap[formatDate(m.date)] = m.roast;
  });

  const roastColors = {
    blonde: "#DAB894",
    medium: "#A9745B",
    dark: "#5C4033",
    espresso: "#3C2A21",
    decaf: "#BFA6A0",
  };

  const months = Array.from({ length: 12 }, (_, i) => {
    const start = new Date(year, i, 1);
    const end = new Date(year, i + 1, 0);
    const days = [];
    let current = new Date(start);
    while (current <= end) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return { name: start.toLocaleString("default", { month: "short" }), days };
  });

  return (
    <>
      {months.map((month) => {
        const firstDay = month.days[0].getDay();
        const blanks = Array(firstDay).fill(null);

        return (
          <div key={month.name} className="month-block">
            <div className="month-name">{month.name}</div>
            <div className="calendar-grid">
              {blanks.map((_, i) => (
                <div key={`blank-${i}`} className="calendar-cell blank" />
              ))}
              {month.days.map((day, i) => {
                const dateStr = formatDate(day);
                const roast = moodMap[dateStr];
                return (
                  <div
                    key={i}
                    className={`calendar-cell ${selectedDate === dateStr ? "selected" : ""}`}
                    title={roast ? `${dateStr} - ${roast}` : ""}
                    style={{ backgroundColor: roast ? roastColors[roast] : "#eee" }}
                    onClick={() => roast ? setSelectedDate(dateStr) : setSelectedDate(null)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
