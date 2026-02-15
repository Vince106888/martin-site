export default function RotatingNodes() {
  const nodes = [
    { position: [-2, 1, -5] as [number, number, number] },
    { position: [2, -1, -4] as [number, number, number] },
    { position: [-1, -2, -3] as [number, number, number] },
    { position: [1, 2, -6] as [number, number, number] },
  ];

  return (
    <>
      {nodes.map((node, index) => (
        <mesh key={`${node.position.join("-")}-${index}`} position={node.position} rotation={[index * 0.3, index * 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color={`hsl(${index * 80}, 80%, 60%)`} />
        </mesh>
      ))}
    </>
  );
}


