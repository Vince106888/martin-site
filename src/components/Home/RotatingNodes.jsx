import React from "react";

export default function RotatingNodes() {
  const nodes = [
    { position: [-2, 1, -5] },
    { position: [2, -1, -4] },
    { position: [-1, -2, -3] },
    { position: [1, 2, -6] },
  ];

  return (
    <>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.position} rotation={[i * 0.3, i * 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color={`hsl(${i * 80}, 80%, 60%)`} />
        </mesh>
      ))}
    </>
  );
}
