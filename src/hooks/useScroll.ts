"use client";

import { useState, useEffect } from "react";

/* ---------------------------------------------------------
   useScroll — Tracks scroll position and direction
   ---------------------------------------------------------
   Usage:
     const { scrollY, scrollDirection, isScrolled } = useScroll();
   
   Future use cases:
     - Header hide/show on scroll
     - Scroll-triggered animations
     - Progress bar
     - Parallax effects
   --------------------------------------------------------- */

interface ScrollState {
  /** Current vertical scroll position in pixels */
  scrollY: number;
  /** Direction of last scroll movement */
  scrollDirection: "up" | "down" | null;
  /** Whether the page has been scrolled past a threshold */
  isScrolled: boolean;
}

export function useScroll(threshold = 50): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      setScrollState({
        scrollY: currentScrollY,
        scrollDirection: direction,
        isScrolled: currentScrollY > threshold,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollState;
}
