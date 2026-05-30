"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { usePageTransition } from "@/app/(main)/a-components/transition/PageTransitionProvider";
import styles from "./Nav.module.css";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Compositions", href: "/compositions" },
  { label: "Background", href: "/background" },
  { label: "Contact", href: "/contact" },
];

const HOVER_TRIGGER_HEIGHT = 80;

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  /**
   * isProvided is true when Nav is rendered inside a PageTransitionProvider.
   * When Nav is outside the provider (as in the current layout), isProvided
   * is false and we fall back to plain router.push() so links still work.
   */
  const { navigate, isProvided } = usePageTransition();

  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const isScrolledDown = useRef(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    e.preventDefault();
    if (pathname === href) return;
    closeMenu();
    if (isProvided) {
      navigate(href);
    } else {
      router.push(href);
    }
  }

  // Hide on scroll down, show when back at top
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolledDown.current) {
        isScrolledDown.current = scrolled;
        setVisible(!scrolled);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal when mouse hovers near the top edge
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isScrolledDown.current) return;
      setVisible(e.clientY <= HOVER_TRIGGER_HEIGHT);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`${styles.nav} ${visible ? styles.navVisible : styles.navHidden}`}
        aria-label="Primary navigation"
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="RS — home">
            <span className={styles.rs}>RS</span>
          </Link>

          <ul className={styles.links} role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={isActive ? styles.linkActive : styles.link}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            className={styles.pianoButton}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <PianoIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      <div className={styles.hoverSentinel} aria-hidden="true" />

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <ul className={styles.drawerLinks} role="list">
          {NAV_LINKS.map(({ label, href }, i) => {
            const isActive = pathname === href;
            return (
              <li
                key={href}
                className={styles.drawerItem}
                style={{ "--i": i } as React.CSSProperties}
              >
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={
                    isActive ? styles.drawerLinkActive : styles.drawerLink
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

/* ─── Piano icon ───────────────────────────────────────────────────────────── */
function PianoIcon({ open }: { open: boolean }) {
  const keys = [
    { wide: true, delay: 0 },
    { wide: false, delay: 0.05 },
    { wide: true, delay: 0.1 },
    { wide: false, delay: 0.15 },
    { wide: true, delay: 0.2 },
  ];

  return (
    <span className={styles.pianoIcon} aria-hidden="true">
      {keys.map((k, i) => (
        <span
          key={i}
          className={`${styles.pianoKey} ${k.wide ? styles.pianoKeyWide : styles.pianoKeyNarrow} ${open ? styles.pianoKeyPressed : ""}`}
          style={{ "--delay": `${k.delay}s` } as React.CSSProperties}
        />
      ))}
    </span>
  );
}
