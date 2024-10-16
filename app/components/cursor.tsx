'use client'

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const innerCursor = document.querySelector(".cursor-inner") as HTMLElement;
    const outerCursor = document.querySelector(".cursor-outer") as HTMLElement;

    if (innerCursor && outerCursor) {
      let cursorHover = false;

      const handleMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        if (outerCursor) {
          outerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        }
        if (innerCursor) {
          innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        }
      };

      const handleMouseEnter = (event: MouseEvent) => {
        const target = event.target as Element;
        if (target && target instanceof Element) {
          if (target.matches("a, .cursor-pointer")) {
            cursorHover = true;
            innerCursor.classList.add("cursor-hover");
            outerCursor.classList.add("cursor-hover");
          }
        }
      };

      const handleMouseLeave = (event: MouseEvent) => {
        const target = event.target as Element;
        if (target && target instanceof Element) {
          if (!target.closest("a, .cursor-pointer")) {
            cursorHover = false;
            innerCursor.classList.remove("cursor-hover");
            outerCursor.classList.remove("cursor-hover");
          }
        }
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseenter", handleMouseEnter, true);
      document.addEventListener("mouseleave", handleMouseLeave, true);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseenter", handleMouseEnter, true);
        document.removeEventListener("mouseleave", handleMouseLeave, true);
      };
    }
  }, []);

  return null;
};

