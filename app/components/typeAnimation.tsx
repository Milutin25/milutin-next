'use client'

import { useEffect, useState } from "react";

export default function TypeAnimation() {
  const animationDelay = 2500;
  const typeLettersDelay = 150;
  const selectionDuration = 500;
  const typeAnimationDelay = selectionDuration + 800;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const words = ["Web Nomad", "Analyzer", "Freelancer"];

  useEffect(() => {
    if (isAnimating) {
      const word = document.querySelectorAll<HTMLSpanElement>(
        ".cd-words-wrapper b"
      )[currentWordIndex];
      if (!word) return;

      const parentSpan = word.parentElement as HTMLSpanElement;
      parentSpan?.classList.add("selected");

      setTimeout(() => {
        parentSpan?.classList.remove("selected");
        word.classList.remove("is-visible");
        word.classList.add("is-hidden");

        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsAnimating(false);
        }, typeAnimationDelay);
      }, selectionDuration);
    } else {
      const nextWord = document.querySelectorAll<HTMLSpanElement>(
        ".cd-words-wrapper b"
      )[currentWordIndex];
      if (!nextWord) return;

      nextWord.classList.add("is-visible");
      nextWord.classList.remove("is-hidden");

      setTimeout(() => {
        setIsAnimating(true);
      }, animationDelay);
    }
  }, [isAnimating, currentWordIndex]);

  return (
   <></>
  );
};
