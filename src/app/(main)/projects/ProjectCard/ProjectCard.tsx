"use client";

import { useRef, useState } from "react";
import styles from "./ProjectCard.module.css";

export interface Project {
  id: string;
  title: string;
  tag: string;
  volume: string;
  description: string;
  tech: string[];
  /** URL for the cover image — omit to render the initials fallback */
  imageUrl?: string;
  /** Two-letter initials shown when no imageUrl is provided */
  initials?: string;
  /** CSS gradient string for the initials fallback background */
  coverGradient?: string;
  isFeatured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -6, y: dx * 6 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${project.isFeatured ? styles.featured : ""}`}
      style={
        {
          "--tilt-x": `${tilt.x}deg`,
          "--tilt-y": `${tilt.y}deg`,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
      aria-label={`Open project: ${project.title}`}
    >
      {/* ── Cover ── */}
      <div className={styles.coverWrap}>
        <div className={styles.spine} aria-hidden="true" />

        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className={styles.coverImg}
            draggable={false}
          />
        ) : (
          <div
            className={styles.coverFallback}
            style={
              {
                "--cover-gradient":
                  project.coverGradient ??
                  "linear-gradient(135deg,#0d2040,#1a3a60)",
              } as React.CSSProperties
            }
          >
            <span className={styles.coverInitials}>
              {project.initials ?? "??"}
            </span>
            <span className={styles.coverLine} />
            <span className={`${styles.coverLine} ${styles.coverLineSm}`} />
          </div>
        )}

        {/* gradient overlay */}
        <div className={styles.coverOverlay} aria-hidden="true" />

        {/* tag badge */}
        <div
          className={`${styles.badge} ${project.isFeatured ? styles.badgeFeatured : ""}`}
        >
          <span className={styles.badgeText}>{project.tag}</span>
        </div>

        {/* bottom meta */}
        <div className={styles.coverMeta}>
          <h2 className={styles.coverTitle}>{project.title}</h2>
          <p className={styles.coverVolume}>{project.volume}</p>
        </div>

        {/* sheen sweep */}
        <div className={styles.sheen} aria-hidden="true" />
      </div>

      {/* ── Shelf line ── */}
      <div className={styles.shelfLine} aria-hidden="true" />
      <div className={styles.shelfShadow} aria-hidden="true" />

      {/* ── Hint ── */}
      <p className={styles.hint} aria-hidden="true">
        click to unpack ↗
      </p>
    </article>
  );
}
