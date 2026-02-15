import type { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  items: string[];
}

export default function Card({ icon, title, items }: CardProps) {
  return (
    <div className="expertise-card rounded-xl bg-white p-6 shadow-xl transition hover:shadow-2xl dark:bg-gray-800">
      <div className="mb-3 text-blue-600">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}


