"use client";

import { useState } from "react";
import styles from "./ExperienceSection.module.css";
import {
  professionalWork,
  educationEntries,
  organizationEntries,
  certifications,
} from "./experienceData";
import type {
  ExperienceEntry,
  EducationEntry,
  OrganizationEntry,
  Certification,
} from "./experienceData";

// ─────────────────────────────────────────────
// DiscDivider
// ─────────────────────────────────────────────

function DiscDivider() {
  return (
    <div className={styles.discDivider} aria-hidden="true">
      <div className={styles.discLine} />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle
          cx="14"
          cy="14"
          r="13"
          fill="#0d1e33"
          stroke="#1a3050"
          strokeWidth="0.5"
        />
        <circle
          cx="14"
          cy="14"
          r="9"
          fill="none"
          stroke="#1a3050"
          strokeWidth="0.5"
        />
        <circle
          cx="14"
          cy="14"
          r="5"
          fill="none"
          stroke="#1a3050"
          strokeWidth="0.5"
        />
        <circle cx="14" cy="14" r="4" fill="rgba(200,168,74,0.18)" />
        <circle cx="14" cy="14" r="1.5" fill="#07101f" />
      </svg>
      <div className={styles.discLine} />
    </div>
  );
}

// ─────────────────────────────────────────────
// TrackEntry — professional work
// ─────────────────────────────────────────────

function TrackEntry({ entry }: { entry: ExperienceEntry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`${styles.trackEntry} ${hovered ? styles.trackEntryHovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Margin: track ID + groove dot */}
      <div className={styles.trackMargin}>
        <span className={styles.srOnly}>{entry.trackId}</span>
        <span className={`${styles.grooveDot} ...`} />
      </div>

      {/* Body */}
      <div className={styles.trackBody}>
        {/* Header row */}
        <div className={styles.entryHeader}>
          <div className={styles.entryHeaderLeft}>
            {entry.roleLabel && (
              <h3 className={styles.roleTitle}>{entry.roleLabel}</h3>
            )}
            <p className={styles.companyName}>{entry.company}</p>
          </div>
          <div className={styles.entryHeaderRight}>
            <span className={styles.period}>{entry.period}</span>
            <span className={styles.entryType}>{entry.type}</span>
          </div>
        </div>

        {/* Subsections (multi-role within one position) */}
        {entry.subsections && entry.subsections.length > 0 && (
          <div className={styles.subsections}>
            {entry.subsections.map((sub) => (
              <div key={sub.roleTitle} className={styles.subsection}>
                <p className={styles.subsectionTitle}>{sub.roleTitle}</p>
                <ul className={styles.bulletList}>
                  {sub.bullets.map((b, i) => (
                    <li key={i} className={styles.bulletItem}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Flat bullets (single-role entry) */}
        {entry.bullets && entry.bullets.length > 0 && (
          <ul className={styles.bulletList}>
            {entry.bullets.map((b, i) => (
              <li key={i} className={styles.bulletItem}>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────
// EducationEntry
// ─────────────────────────────────────────────

function EducationTrack({ entry }: { entry: EducationEntry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`${styles.trackEntry} ${hovered ? styles.trackEntryHovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.trackMargin}>
        <span className={styles.srOnly}>{entry.trackId}</span>
        <span className={`${styles.grooveDot} ...`} />
      </div>

      <div className={styles.trackBody}>
        <div className={styles.entryHeader}>
          <div className={styles.entryHeaderLeft}>
            <h3 className={styles.companyName}>{entry.institution}</h3>
            {entry.degrees.map((deg) => (
              <p key={deg} className={styles.roleLabel}>
                {deg}
              </p>
            ))}
          </div>
          <span className={styles.period}>{entry.period}</span>
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────
// OrganizationEntry
// ─────────────────────────────────────────────

function OrganizationTrack({ entry }: { entry: OrganizationEntry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`${styles.trackEntry} ${hovered ? styles.trackEntryHovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.trackMargin}>
        <span className={styles.srOnly}>{entry.trackId}</span>
        <span className={`${styles.grooveDot} ...`} />
      </div>

      <div className={styles.trackBody}>
        <div className={styles.entryHeader}>
          <div className={styles.entryHeaderLeft}>
            <h3 className={styles.companyName}>{entry.title}</h3>
            <p className={styles.roleLabel}>{entry.org}</p>
          </div>
          <span className={styles.period}>{entry.period}</span>
        </div>

        <ul className={styles.bulletList}>
          {entry.bullets.map((b, i) => (
            <li key={i} className={styles.bulletItem}>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────
// CreditsBlock — certifications
// ─────────────────────────────────────────────

function CreditsBlock({ certs }: { certs: Certification[] }) {
  return (
    <div className={styles.creditsBlock}>
      <p className={styles.creditsLabel}>Credits &amp; Certifications</p>
      <ul className={styles.creditsGrid}>
        {certs.map((cert) => (
          <li key={cert.name} className={styles.certItem}>
            <span className={styles.certName}>{cert.name}</span>
            <span className={styles.certIssuer}>{cert.issuer}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─────────────────────────────────────────────
// BlockHeader — "Professional Work" / "Education" labels
// ─────────────────────────────────────────────

function BlockHeader({ title }: { title: string }) {
  return (
    <div className={styles.blockHeader}>
      <span className={styles.blockHeaderRule} aria-hidden="true" />
      <h4 className={styles.blockHeaderTitle}>{title}</h4>
      <span className={styles.blockHeaderRule} aria-hidden="true" />
    </div>
  );
}

// ─────────────────────────────────────────────
// ExperienceSection — root export
// ─────────────────────────────────────────────

export default function ExperienceSection() {
  return (
    <section className={styles.section} id="experience" aria-label="Experience">
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.sectionTag}>05 — Experience</p>
        <h2 className={styles.sectionHeading}>The Liner Notes</h2>

        <div className={styles.gatefold}>
          {/* ── Professional Work ── */}
          <BlockHeader title="Professional Work" />
          <div className={styles.grooveWrap}>
            <div className={styles.grooveLine} aria-hidden="true" />
            {professionalWork.map((entry) => (
              <TrackEntry key={entry.trackId} entry={entry} />
            ))}
          </div>

          <DiscDivider />

          {/* ── Education ── */}
          <BlockHeader title="Education" />
          <div className={styles.grooveWrap}>
            <div className={styles.grooveLine} aria-hidden="true" />
            {educationEntries.map((entry) => (
              <EducationTrack key={entry.trackId} entry={entry} />
            ))}
          </div>

          <DiscDivider />

          {/* ── Organizations ── */}
          <BlockHeader title="Organizations" />
          <div className={styles.grooveWrap}>
            <div className={styles.grooveLine} aria-hidden="true" />
            {organizationEntries.map((entry) => (
              <OrganizationTrack key={entry.trackId} entry={entry} />
            ))}
          </div>

          {/* ── Certifications ── */}
          <CreditsBlock certs={certifications} />
        </div>
      </div>
    </section>
  );
}
