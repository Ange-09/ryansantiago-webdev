"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/app/(main)/compositions/ProjectsSection/ProjectData";
import type { Project } from "@/app/(main)/compositions/ProjectsSection/ProjectData";
import ProjectCard from "@/app/(main)/compositions/ProjectCard/ProjectCard";
import ProjectModal from "@/app/(main)/compositions/ProjectCard/ProjectModal/ProjectModal";
import styles from "./FeaturedWork.module.css";

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featured = PROJECTS.filter((p: Project) => p.isFeatured).slice(0, 4);

  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className={styles.inner}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <h2 id="featured-heading" className={styles.heading}>
            Selected Compositions
          </h2>
          <p className={styles.sub}>
            A curated selection from the full catalogue.
          </p>
        </header>

        {/* ── Shelf ── */}
        <div
          className={styles.shelf}
          style={{ "--count": 3 } as React.CSSProperties}
        >
          <div className={styles.track}>
            {featured.map((project: Project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={(p: Project) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.footer}>
          <Link href="/compositions" className={styles.viewAll}>
            View full catalogue
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* ── Modal ── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
