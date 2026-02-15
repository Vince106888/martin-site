const data = [
  { value: "DPhil", label: "Engineering Science" },
  { value: "Oxford", label: "University" },
  { value: "Rhodes", label: "Scholar (Kenya, 2019)" },
  { value: "IEEE", label: "Member" },
];

export default function Stats() {
  return (
    <section className="gradient-blue-purple px-6 py-20 text-center text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
        {data.map((item) => (
          <div key={item.label}>
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


