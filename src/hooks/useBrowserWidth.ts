"use client";

import { useState, useEffect } from "react";

export function useBrowserWidth(): [number | undefined] {
  const [browserWidth, setBrowserWidth] = useState(<number | undefined>(undefined));

  useEffect(() => {
    const handleResize = () => setBrowserWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [browserWidth];
}
