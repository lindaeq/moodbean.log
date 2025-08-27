import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function MoodChart({ moods }) {
  const roastCount = moods.reduce((acc, mood) => {
    acc[mood.roast] = (acc[mood.roast] || 0) + 1;
    return acc;
  }, {});

  const data = Object.keys(roastCount).map((key) => ({
    name: key,
    value: roastCount[key],
  }));

  const COLORS = {
    blonde: "#DAB894",
    medium: "#A9745B",
    dark: "#5C4033",
    espresso: "#3C2A21",
    decaf: "#BFA6A0",
  };

  return (
    <div className="mood-chart">
      <h2>Your Roast Blend</h2>
      <PieChart width={300} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={COLORS[entry.name]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
