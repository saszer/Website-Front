"use client";
import { useEffect } from "react";

export default function ClientInit() {
  useEffect(() => {
    // Handle initial hash scrolling
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return null;
}
