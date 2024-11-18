import { useState, useEffect } from "react";

export function useBrowserWidth(): [number] {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setBrowserWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [browserWidth];
}