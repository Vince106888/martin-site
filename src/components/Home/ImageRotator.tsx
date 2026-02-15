"use client";

import { useEffect, useState } from "react";

interface ImageRotatorProps {
  images: string[];
  interval?: number;
}

export default function ImageRotator({ images, interval = 4000 }: ImageRotatorProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length === 0) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % images.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="hero-bg">
      {images.map((src, idx) => (
        <div
          key={src}
          className={`bg-image ${idx === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}


