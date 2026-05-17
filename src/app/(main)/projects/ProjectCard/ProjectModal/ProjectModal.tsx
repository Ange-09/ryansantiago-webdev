"use client";

import { useEffect, useRef, useState } from "react";
import { type Project } from "../ProjectCard";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [visible, setVisible] = useState(false);
  const [coverFaded, setCoverFaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const vinylRef = useRef<HTMLDivElement>(null);

  // Rotation persistence
  const rotationRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!project) return;

    setVisible(true);
    setCoverFaded(false);
    setIsPlaying(false);

    // Reset rotation on new project
    rotationRef.current = 0;

    document.body.style.overflow = "hidden";

    const coverTimer = setTimeout(() => {
      setCoverFaded(true);
    }, 800);

    const playTimer = setTimeout(() => {
      setIsPlaying(true);
    }, 1200);

    return () => {
      clearTimeout(coverTimer);
      clearTimeout(playTimer);
    };
  }, [project]);

  // Vinyl rotation loop
  useEffect(() => {
    const speed = 360 / 2.2;

    function animate(time: number) {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      rotationRef.current += delta * speed;

      if (vinylRef.current) {
        vinylRef.current.style.setProperty(
          "--rotation",
          `${rotationRef.current}deg`,
        );
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    if (isPlaying) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      lastTimeRef.current = null;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  function handleClose() {
    document.body.style.overflow = "";
    setVisible(false);
    setCoverFaded(false);
    setIsPlaying(false);
    onClose();
  }

  function handleVinylClick() {
    if (!coverFaded) return;
    setIsPlaying((prev) => !prev);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && visible) {
        handleClose();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [visible]);

  if (!project || !visible) return null;

  const coverContent = project.imageUrl ? (
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
            project.coverGradient ?? "linear-gradient(135deg,#0d2040,#1a3a60)",
        } as React.CSSProperties
      }
    >
      <span className={styles.coverInitials}>{project.initials ?? "??"}</span>
    </div>
  );

  return (
    <div
      className={`${styles.overlay} ${styles.overlayVisible}`}
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && handleClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Project: ${project.title}`}
    >
      <div className={`${styles.panel} ${styles.panelVisible}`}>
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* LEFT CONTENT */}
        <div className={`${styles.content} ${styles.contentVisible}`}>
          <div className={styles.tagRow}>
            <span
              className={`${styles.tag} ${
                project.isFeatured ? styles.tagFeatured : ""
              }`}
            >
              {project.tag}
            </span>
          </div>

          <h2 className={styles.title}>{project.title}</h2>

          <p className={styles.volume}>{project.volume}</p>

          <p className={styles.desc}>{project.description}</p>

          <div className={styles.techBlock}>
            <span className={styles.techLabel}>Technologies used</span>

            <div className={styles.techPills}>
              {project.tech.map((t) => (
                <span key={t} className={styles.pill}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.btnPrimary}>View live project</button>

            <button className={styles.btnGhost}>Source code</button>
          </div>
        </div>

        {/* RIGHT STAGE */}
        <div className={styles.stage}>
          {/* Turntable */}
          <div className={styles.turntableBase}>
            <div className={styles.turntablePlatter} />{" "}
          </div>

          {/* Vinyl */}
          <div
            ref={vinylRef}
            className={`
    ${styles.vinyl}
    ${coverFaded ? styles.vinylVisible : ""}
    ${coverFaded ? styles.vinylSpin : ""}
  `}
            style={{
              animationPlayState: isPlaying ? "running" : "paused",
            }}
            onClick={handleVinylClick}
            role="button"
            aria-label={isPlaying ? "Pause vinyl" : "Play vinyl"}
            tabIndex={coverFaded ? 0 : -1}
          >
            <div className={styles.vinylGrooves} />

            <div className={styles.vinylLabel}>
              <span className={styles.vinylLabelText}>
                {project.initials ?? project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>

            <div className={styles.vinylSheen} />

            <div className={styles.vinylHint} aria-hidden="true">
              {isPlaying ? "❚❚" : "▶"}
            </div>
          </div>

          {/* Spindle */}
          <div className={styles.spindle}>
            <div className={styles.spindleCore} />
          </div>

          {/* Tonearm */}
          <div className={styles.tonearmBase}>
            <div className={styles.tonearmPivot} />

            <div
              className={`${styles.tonearm} ${
                isPlaying ? styles.tonearmEngaged : ""
              }`}
            />
          </div>

          {/* Album cover */}
          <div
            className={`${styles.coverReveal} ${
              coverFaded ? styles.coverFadedOut : ""
            }`}
          >
            {coverContent}
            <div className={styles.coverOverlay} />
          </div>
        </div>
      </div>
    </div>
  );
}
