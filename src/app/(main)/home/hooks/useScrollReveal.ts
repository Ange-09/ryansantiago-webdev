"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 *
 * Returns a ref to attach to a section wrapper, and a boolean
 * that flips to true once the section enters the viewport.
 * Fires once per section (does not re-trigger on scroll-up).
 *
 * Respects prefers-reduced-motion: if the user has that enabled,
 * isVisible is set to true immediately and no observer is created.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.2
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
