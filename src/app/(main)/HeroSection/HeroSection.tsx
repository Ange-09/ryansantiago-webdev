"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  name?: string;
  title?: string;
  tagline?: string;
  ctaPrimaryLabel?: string;
  ctaSecondaryLabel?: string;
  onCtaPrimary?: () => void;
  onCtaSecondary?: () => void;
}

export default function HeroSection({
  name = "Your Name",
  title = "Full-Stack Developer",
  tagline = "Crafting digital experiences with precision and intent.",
  ctaPrimaryLabel = "View Work",
  ctaSecondaryLabel = "Get in Touch",
  onCtaPrimary,
  onCtaSecondary,
}: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Staggered reveal on mount
    const items = el.querySelectorAll<HTMLElement>(`.${styles.reveal}`);

    items.forEach((item, i) => {
      item.style.animationDelay = `${i * 120}ms`;
      item.classList.add(styles.revealed);
    });
  }, []);

  return (
    <section ref={containerRef} className={styles.hero} id="hero">
      {/* Atmospheric spotlight layer */}
      <div className={styles.spotlightGold} aria-hidden="true" />
      <div className={styles.spotlightBlue} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Section tag */}
        <p className={`${styles.sectionTag} ${styles.reveal}`} aria-hidden="true">
          01 — Hero
        </p>

        {/* Name */}
        <h1 className={`${styles.name} ${styles.reveal}`}>
          {name}
        </h1>

        {/* Title */}
        <p className={`${styles.titleRole} ${styles.reveal}`}>
          {title}
        </p>

        {/* Tagline */}
        <p className={`${styles.tagline} ${styles.reveal}`}>
          {tagline}
        </p>

        {/* Divider */}
        <div className={`${styles.divider} ${styles.reveal}`} aria-hidden="true" />

        {/* CTA buttons */}
        <div className={`${styles.ctaRow} ${styles.reveal}`}>
          <button
            className={styles.btnPrimary}
            onClick={onCtaPrimary}
            type="button"
          >
            {ctaPrimaryLabel}
          </button>

          <button
            className={styles.btnSecondary}
            onClick={onCtaSecondary}
            type="button"
          >
            {ctaSecondaryLabel}
          </button>
        </div>
      </div>
    </section>
  );
}