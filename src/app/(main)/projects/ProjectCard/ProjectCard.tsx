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
              { "--cover-gradient": project.coverGradient ?? "linear-gradient(135deg,#0d2040,#1a3a60)" } as React.CSSProperties
            }
          >
            <span className={styles.coverInitials}>{project.initials ?? "??"}</span>
            <span className={styles.coverLine} />
            <span className={`${styles.coverLine} ${styles.coverLineSm}`} />
          </div>
        )}

        {/* gradient overlay */}
        <div className={styles.coverOverlay} aria-hidden="true" />

        {/* tag badge */}
        <div className={`${styles.badge} ${project.isFeatured ? styles.badgeFeatured : ""}`}>
          <span className={styles.badgeText}>{project.tag}</span>
        </div>

        {/* bottom meta */}
        <div className={styles.coverMeta}>
          <h2 className={styles.coverTitle}>{project.title}</h2>
          <p className={styles.coverVolume}>{project.volume}</p>
        </div>

        {/* hover vinyl peek */}
        <div className={styles.vinylPeek} aria-hidden="true">
          <VinylDisc size={120} isFeatured={project.isFeatured} />
        </div>

        {/* sheen sweep */}
        <div className={styles.sheen} aria-hidden="true" />
      </div>

      {/* ── Shelf line ── */}
      <div className={styles.shelfLine} aria-hidden="true" />
      <div className={styles.shelfShadow} aria-hidden="true" />

      {/* ── Hint ── */}
      <p className={styles.hint} aria-hidden="true">click to unpack ↗</p>
    </article>
  );
}

// ── Inline sub-component: reusable vinyl SVG ──────────────────────────────────
export function VinylDisc({
  size = 200,
  isFeatured = false,
  spinning = false,
}: {
  size?: number;
  isFeatured?: boolean;
  spinning?: boolean;
}) {
  const labelColor = isFeatured ? "#c8a84a" : "#a8c0d8";
  const r = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={spinning ? styles.vinylSpin : undefined}
      aria-hidden="true"
    >
      {/* grooves */}
      {[0.95, 0.86, 0.77, 0.68, 0.59, 0.5, 0.42].map((scale, i) => (
        <circle
          key={i}
          cx={r}
          cy={r}
          r={r * scale}
          fill="none"
          stroke={i % 2 === 0 ? "#111" : "#1a1a1a"}
          strokeWidth={r * 0.03}
        />
      ))}
      {/* dark base */}
      <circle cx={r} cy={r} r={r * 0.97} fill="#0f0f0f" fillOpacity="0.6" />
      {/* groove lines */}
      {Array.from({ length: 18 }).map((_, i) => {
        const angle = (i / 18) * Math.PI * 2;
        const x1 = r + Math.cos(angle) * r * 0.38;
        const y1 = r + Math.sin(angle) * r * 0.38;
        const x2 = r + Math.cos(angle) * r * 0.9;
        const y2 = r + Math.sin(angle) * r * 0.9;
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(255,255,255,0.015)"
            strokeWidth="0.8"
          />
        );
      })}
      {/* label */}
      <circle cx={r} cy={r} r={r * 0.28} fill="#0a1828" />
      <circle cx={r} cy={r} r={r * 0.28} fill={labelColor} fillOpacity="0.12" />
      <circle cx={r} cy={r} r={r * 0.28} stroke={labelColor} strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
      <text
        x={r} y={r - r * 0.06}
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize={r * 0.1}
        fill={labelColor}
        letterSpacing="0.12em"
      >
        VERVE
      </text>
      <text
        x={r} y={r + r * 0.1}
        textAnchor="middle"
        fontFamily="'SF Mono','Fira Code',monospace"
        fontSize={r * 0.07}
        fill={labelColor}
        fillOpacity="0.6"
        letterSpacing="0.06em"
      >
        33⅓ RPM
      </text>
      {/* spindle */}
      <circle cx={r} cy={r} r={r * 0.04} fill="#07101f" stroke={labelColor} strokeWidth="0.5" strokeOpacity="0.4" />
    </svg>
  );
}
