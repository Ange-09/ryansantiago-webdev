"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

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
      <nav className={styles.nav} aria-label="Primary navigation">
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="RS — home">
            <span className={styles.rs}>RS</span>
          </Link>

          {/* Desktop navigation links */}
          <ul className={styles.links} role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={isActive ? styles.linkActive : styles.link}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Piano menu button — mobile only */}
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

      {/* Mobile drawer overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
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
                <Link
                  href={href}
                  className={
                    isActive ? styles.drawerLinkActive : styles.drawerLink
                  }
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
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
