import type { ReactNode, CSSProperties } from "react";
import Link from "next/link";
import styles from "./DevIntro.module.css";

interface TechItem {
  name: string;
  icon: ReactNode;
}

interface BobStyle extends CSSProperties {
  "--bob-index"?: number;
}

const techStack: TechItem[] = [
  {
    name: "React",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          transform="rotate(120 12 12)"
        />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 8.5v7M9 8.5l6.2 8" fill="none" />
        <path d="M15 8.5v6" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <rect x="3" y="3" width="18" height="18" rx="2.5" />
        <path d="M7.5 9h5M10 9v6.5" />
        <path d="M14.3 14.7c.3.55.95.95 1.7.95.95 0 1.7-.55 1.7-1.3 0-.85-.7-1.15-1.7-1.4-1-.25-1.7-.6-1.7-1.4 0-.7.7-1.25 1.6-1.25.75 0 1.35.35 1.65.9" />
      </svg>
    ),
  },
  {
    name: "CSS Modules",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M8 4 4 4 4 20 8 20" />
        <path d="M16 4h4v16h-4" />
        <path d="M10.5 9.5h3M10.5 12h3M10.5 14.5h2" />
      </svg>
    ),
  },
];

export default function DevIntro() {
  return (
    <section className={styles.intro} aria-label="What I build">
      <div className={styles.content}>
        <p className={styles.tag}>What I build</p>

        <h2 className={styles.statement}>
          I build full-stack web applications, from interface to infrastructure.
        </h2>

        <p className={styles.paragraph}>
          My background in systems and process improvement shapes how I write
          code — structured, detail-oriented, and built to hold up under
          real-world use. I care as much about how an application is put
          together as how it looks.
        </p>

        <Link href="/background" className={styles.link}>
          More about my background
        </Link>
      </div>

      <div className={styles.stackSubsection}>
        <p className={styles.stackLabel}>Working stack</p>
        <ul className={styles.stackColumn}>
          {techStack.map((tech, index) => (
            <li
              key={tech.name}
              className={styles.stackPill}
              style={{ "--bob-index": index } as BobStyle}
            >
              <span className={styles.stackIcon}>{tech.icon}</span>
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
