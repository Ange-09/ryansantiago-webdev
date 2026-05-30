"use client";

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

type FadePhase = "idle" | "fade-out" | "fade-in";

interface TransitionContextValue {
  navigate: (href: string) => void;
  /** True when the provider is actually mounted — false when using the default context */
  isProvided: boolean;
}

// ─── Context ──────────────────────────────────────────────────────────────────

/**
 * The default value is intentionally a no-op navigate.
 * Components outside the provider (e.g. Nav, Footer) detect `isProvided: false`
 * and fall back to plain router.push() instead.
 */
const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => {},
  isProvided: false,
});

export function usePageTransition(): TransitionContextValue {
  return useContext(TransitionContext);
}

// ─── Duration ─────────────────────────────────────────────────────────────────

const FADE_OUT_MS = 200;
const FADE_IN_MS = 320;

// ─── Provider ─────────────────────────────────────────────────────────────────

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [phase, setPhase] = useState<FadePhase>("idle");
  const isAnimating = useRef(false);
  const prevPathname = useRef(pathname);

  // ── Programmatic navigate ──────────────────────────────────────────────────

  const navigate = useCallback(
    (href: string) => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      setPhase("fade-out");

      const midTimer = window.setTimeout(() => {
        router.push(href);
        setPhase("fade-in");

        const endTimer = window.setTimeout(() => {
          setPhase("idle");
          isAnimating.current = false;
        }, FADE_IN_MS);

        return () => window.clearTimeout(endTimer);
      }, FADE_OUT_MS);

      return () => window.clearTimeout(midTimer);
    },
    [router],
  );

  // ── Handle browser back/forward ────────────────────────────────────────────

  useEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;
    if (isAnimating.current) return;

    isAnimating.current = true;
    setPhase("fade-in");

    const t = window.setTimeout(() => {
      setPhase("idle");
      isAnimating.current = false;
    }, FADE_IN_MS);

    return () => window.clearTimeout(t);
  }, [pathname]);

  // ── Class derivation ───────────────────────────────────────────────────────

  const wrapperClass = [
    styles.pageWrapper,
    phase === "fade-out" ? styles.fadeOut : undefined,
    phase === "fade-in" ? styles.fadeIn : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <TransitionContext.Provider value={{ navigate, isProvided: true }}>
      <div className={wrapperClass}>{children}</div>
    </TransitionContext.Provider>
  );
}
