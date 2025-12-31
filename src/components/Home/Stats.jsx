import React from "react";

export default function Stats() {
  const data = [
    { value: "DPhil", label: "Engineering Science" },
    { value: "Oxford", label: "University" },
    { value: "Rhodes", label: "Scholar (Kenya, 2019)" },
    { value: "IEEE", label: "Member" },
  ];

  return (
    <section className="py-20 px-6 gradient-blue-purple text-white text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {data.map((d, idx) => (
          <div key={idx}>
            <div className="stat-value">{d.value}</div>
            <div className="stat-label">{d.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
