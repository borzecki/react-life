import { useEffect, useState } from "react";

const getSize = () => ({
  width: isClient ? window.innerWidth : undefined,
  height: isClient ? window.innerHeight : undefined,
});
const isClient = typeof window === "object";

export default () => {
  const [windowSize, setWindowSize] = useState(getSize);

  const handleResize = () => setWindowSize(getSize());

  useEffect(() => {
    if (!isClient) return false;

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return windowSize;
};
