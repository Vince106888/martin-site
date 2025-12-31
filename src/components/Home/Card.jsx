import React from "react";

export default function Card({ icon, title, items }) {
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl expertise-card transition">
      <div className="text-blue-600 mb-3">{icon}</div>
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        {items.map((i, idx) => (
          <li key={idx}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}
