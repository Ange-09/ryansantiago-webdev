"use client";

import { useState } from "react";
import { PROJECTS } from "./ProjectData";
import ProjectCard, { type Project } from "../ProjectCard/ProjectCard";
import ProjectModal from "../ProjectCard/ProjectModal/ProjectModal";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className={styles.section} id="work" aria-label="Projects">
      {/* Section header */}
      <header className={styles.header}>
        <span className={styles.sectionTag}>02 — Work</span>
        <h1 className={styles.heading}>Selected projects</h1>
        <p className={styles.sub}>
          A curated shelf of recent work — click any cover to unpack the
          details.
        </p>
      </header>

      {/* Album grid */}
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setActiveProject}
          />
        ))}
      </div>

      {/* Modal — rendered at section level so it sits above everything */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
