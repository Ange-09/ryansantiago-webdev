"use client";

/**
 * PageTransitionProvider
 *
 * Wraps the (main) layout and orchestrates a page-flip animation between
 * route changes. Exposes a `navigate(href)` helper via context so any
 * component can trigger the transition instead of calling router.push directly.
 *
 * Animation phases:
 *   idle     → page fully visible, no transform
 *   flip-out → page rotates 0° → −90° (folds away from viewer)
 *              desktop: rotates on left spine (book page turn)
 *              mobile:  rotates on top edge (vertical card flip — less
 *                       disorienting on narrow viewports)
 *   [swap]   → at the exact midpoint the route is pushed and content swapped
 *   flip-in  → page rotates 90° → 0° (unfolds into view)
 *   idle     → complete
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./PageTransitionProvider.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

type FlipPhase = "idle" | "flip-out" | "flip-in";

interface TransitionContextValue {
  /**
   * Call this instead of router.push() to trigger the flip animation.
   * Safe to call while already animating — duplicate calls are ignored.
   */
  navigate: (href: string) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => {},
});

export function usePageTransition(): TransitionContextValue {
  return useContext(TransitionContext);
}

// ─── Durations ────────────────────────────────────────────────────────────────

/** Each half of the flip (out + in) in milliseconds. */
const HALF_DURATION_MS = 400;

// ─── Provider ─────────────────────────────────────────────────────────────────

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [phase, setPhase] = useState<FlipPhase>("idle");

  /**
   * We keep a stable snapshot of children to display. During the flip-out we
   * show the OLD children; at the midpoint we let React re-render with the new
   * pathname's children naturally — the swap happens while the page is
   * edge-on (invisible), so there's no visible flash.
   */
  const isAnimating = useRef(false);
  const prevPathname = useRef(pathname);

  // ── Programmatic navigate ──────────────────────────────────────────────────

  const navigate = useCallback(
    (href: string) => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      // Phase 1: flip out
      setPhase("flip-out");

      const midTimer = window.setTimeout(() => {
        // Midpoint: page is edge-on — push the route now.
        // Next.js will update the URL and begin rendering the new page.
        router.push(href);

        // Phase 2: flip in (new content renders behind this animation)
        setPhase("flip-in");

        const endTimer = window.setTimeout(() => {
          setPhase("idle");
          isAnimating.current = false;
        }, HALF_DURATION_MS);

        return () => window.clearTimeout(endTimer);
      }, HALF_DURATION_MS);

      return () => window.clearTimeout(midTimer);
    },
    [router],
  );

  // ── Handle browser back/forward (not triggered by navigate()) ─────────────

  useEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;

    // If our own navigate() is running it already owns the animation.
    if (isAnimating.current) return;

    // External navigation (back/forward/Link): run a brief flip-in only.
    isAnimating.current = true;
    setPhase("flip-in");

    const t = window.setTimeout(() => {
      setPhase("idle");
      isAnimating.current = false;
    }, HALF_DURATION_MS);

    return () => window.clearTimeout(t);
  }, [pathname]);

  // ── Derive wrapper class ───────────────────────────────────────────────────

  const wrapperClass = [
    styles.flipWrapper,
    phase === "flip-out" ? styles.flipOut : undefined,
    phase === "flip-in" ? styles.flipIn : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <TransitionContext.Provider value={{ navigate }}>
      <div className={styles.perspectiveContainer}>
        <div className={wrapperClass}>{children}</div>
      </div>
    </TransitionContext.Provider>
  );
}
