"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function VisitLogger() {
  const pathname = usePathname();

  useEffect(() => {
    // ارسال بازدید به API
    fetch("https://jsk-co.com/api/visits/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: pathname }),
    }).catch((err) => console.error("Visit logging failed:", err));
  }, [pathname]);

  return null;
}
