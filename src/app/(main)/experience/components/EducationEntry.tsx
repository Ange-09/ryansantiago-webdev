'use client';

import { useState } from 'react';
import type { EducationEntry as EducationEntryType } from '@/types/experience';
import styles from './EducationEntry.module.css';

type EducationEntryProps = {
  entry: EducationEntryType;
};

export default function EducationEntry({ entry }: EducationEntryProps) {
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
        {/* Degrees */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h3 className={styles.institution}>{entry.institution}</h3>
            {entry.degrees.map((degree) => (
              <p key={degree} className={styles.degree}>
                {degree}
              </p>
            ))}
          </div>
          <span className={styles.period}>{entry.period}</span>
        </div>

        {/* Organizational role — inlined under education */}
        {entry.organizationalRole && (
          <div className={styles.orgBlock}>
            <div className={styles.orgHeader}>
              <div>
                <p className={styles.orgTitle}>{entry.organizationalRole.title}</p>
                <p className={styles.orgName}>{entry.organizationalRole.org}</p>
              </div>
              <span className={styles.orgPeriod}>{entry.organizationalRole.period}</span>
            </div>
            <ul className={styles.bullets}>
              {entry.organizationalRole.bullets.map((bullet, i) => (
                <li key={i} className={styles.bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
