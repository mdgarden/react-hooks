import { useEffect, useState } from "react";

export function useDeviceOrientation(onOrientationChange) {
  const [orientations, setOrientations] = useState({
    alpha: "null",
    beta: "null",
    gamma: "null",
  });
  const onMovement = (event) => {
    const { alpha, beta, gamma } = event;
    setOrientations({ alpha, beta, gamma });
    if (typeof onOrientationChange === "function") {
      onOrientationChange(event);
    }
  };
  useEffect(() => {
    window.addEventListener("deviceorientation", onMovement);
    return () => window.removeEventListener("deviceorientation", onMovement);
  }, []);
  return orientations;
}
