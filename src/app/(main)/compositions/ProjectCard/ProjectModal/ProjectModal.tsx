"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { type Project } from "../../ProjectsSection/ProjectData";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!project || !visible || !mounted) return null;

  return createPortal(
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
            <button
              className={styles.btnPrimary}
              onClick={() =>
                window.open(project.link, "_blank", "noopener,noreferrer")
              }
            >
              View live project
            </button>
          </div>
        </div>

        {/* RIGHT — Project image */}
        <div className={styles.preview}>
          {project.modalImg ? (
            <>
              <img
                src={project.modalImg}
                alt={`${project.title} preview`}
                className={styles.previewImg}
                draggable={false}
              />
              <div className={styles.previewOverlay} />
            </>
          ) : (
            <div
              className={styles.previewFallback}
              style={{ background: project.coverGradient ?? undefined }}
            >
              <span className={styles.previewFallbackInitials}>
                {project.initials ?? project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
