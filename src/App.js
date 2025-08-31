import React, { useState } from "react";
import "./App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [moods, setMoods] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);

  const handleAddMood = (date, brew, note) => {
    setMoods(prev => ({ ...prev, [date]: { brew, note } }));
    setSelectedDay(date);
    setCurrentPage(2);
  };

  return (
    <div className={`page-container ${currentPage === 1 ? "show-page1" : "show-page2"}`}>
      <div className="page">
        <Page1 onSubmit={handleAddMood} />
      </div>
      <div className="page">
        <Page2
          moods={moods}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          onSubmit={(date, brew, note) =>
            setMoods(prev => ({ ...prev, [date]: { brew, note } }))
          }
        />
      </div>
    </div>
  );
}

export default App;
