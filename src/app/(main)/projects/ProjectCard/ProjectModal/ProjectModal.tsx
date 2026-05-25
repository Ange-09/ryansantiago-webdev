"use client";

import { useEffect, useRef, useState } from "react";
import { type Project } from "../../ProjectsSection/ProjectData";
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
            {project.projImg ? (
              <a
                href={project.projImg}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                View live project
              </a>
            ) : (
              <span className={styles.btnPrimaryDisabled}>No live URL</span>
            )}
          </div>
        </div>

        {/* RIGHT — Project image */}
        <div className={styles.preview}>
          {project.projImg ? (
            <>
              <img
                src={project.projImg}
                alt={`${project.title} preview`}
                className={styles.previewImg}
                draggable={false}
              />
              <div className={styles.previewOverlay} />
            </>
          ) : (
            <div className={styles.previewFallback}>
              <span className={styles.previewFallbackInitials}>
                {project.initials ?? project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}