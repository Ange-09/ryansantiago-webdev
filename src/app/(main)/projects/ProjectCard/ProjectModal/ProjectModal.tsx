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
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    setVisible(true);
    document.body.style.overflow = "hidden";
  }, [project]);

  function handleClose() {
    document.body.style.overflow = "";
    setVisible(false);
    onClose();
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && visible) handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  if (!project || !visible) return null;

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
              className={`${styles.tag} ${project.isFeatured ? styles.tagFeatured : ""}`}
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
          <div className={styles.turntableBase}>
            <div className={styles.turntablePlatter} />
            <div className={styles.turntableInner} />
            <div className={styles.spindle}>
              <div className={styles.spindleCore} />
            </div>
            <div className={styles.tonearmBase}>
              <div className={styles.tonearmPivot} />
              <div className={styles.tonearm} />
            </div>
          </div>

          {/* SLEEVE */}
          <div className={styles.sleeve} aria-hidden="true">
            <div className={styles.sleeveSpine} />

            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt=""
                className={styles.sleeveImg}
                draggable={false}
              />
            ) : (
              <div
                className={styles.sleeveFallback}
                style={
                  {
                    "--cover-gradient":
                      project.coverGradient ??
                      "linear-gradient(135deg,#0d2040,#1a3a60)",
                  } as React.CSSProperties
                }
              >
                <span className={styles.sleeveInitials}>
                  {project.initials ?? "??"}
                </span>
              </div>
            )}

            <div className={styles.sleeveOverlay} />
          </div>
        </div>
      </div>
    </div>
  );
}
