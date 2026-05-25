'use client';

import { useState } from 'react';
import type { ExperienceEntry } from '@/types/experience';
import styles from './TrackEntry.module.css';

type TrackEntryProps = {
  entry: ExperienceEntry;
};

export default function TrackEntry({ entry }: TrackEntryProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={styles.entry}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.margin}>
        <span className={styles.trackId}>{entry.trackId}</span>
        <span
          className={`${styles.dot} ${hovered ? styles.dotActive : ''}`}
          aria-hidden="true"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h3 className={styles.company}>{entry.company}</h3>
            {entry.roles.map((role) => (
              <p key={role} className={styles.role}>
                {role}
              </p>
            ))}
          </div>
          <div className={styles.headerRight}>
            <span className={styles.period}>{entry.period}</span>
            <span className={styles.type}>{entry.type}</span>
          </div>
        </div>

        <ul className={styles.bullets}>
          {entry.bullets.map((bullet, i) => (
            <li key={i} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>

        {entry.featuredProject && (
          <div className={styles.featuredTrack}>
            <span className={styles.ftLabel}>{entry.featuredProject.label}</span>
            <p className={styles.ftDescription}>{entry.featuredProject.description}</p>
          </div>
        )}
      </div>
    </article>
  );
}
