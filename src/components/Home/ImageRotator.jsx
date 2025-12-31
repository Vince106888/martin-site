import React, { useState, useEffect } from "react";

export default function ImageRotator({ images = [], interval = 4000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="hero-bg">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`bg-image ${idx === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}
