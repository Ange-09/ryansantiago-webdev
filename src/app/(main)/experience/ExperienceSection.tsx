import TrackEntry from './TrackEntry';
import EducationEntry from './EducationEntry';
import DiscDivider from './DiscDivider';
import CreditsBlock from './CreditsBlock';
import {
  professionalWork,
  education,
  certifications,
} from './experienceData';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <section className={styles.section} id="experience" aria-label="Experience">
      {/* Spotlight atmosphere */}
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Section tag */}
        <p className={styles.sectionTag}>05 — Experience</p>

        {/* Section heading */}
        <h2 className={styles.heading}>The Liner Notes</h2>

        {/* Gatefold surface */}
        <div className={styles.gatefold}>

          {/* ── Professional Work ── */}
          <div className={styles.block}>
            <p className={styles.blockLabel}>Professional Work</p>
            <div className={styles.grooveWrap}>
              <div className={styles.grooveLine} aria-hidden="true" />
              {professionalWork.map((entry) => (
                <TrackEntry key={entry.trackId} entry={entry} />
              ))}
            </div>
          </div>

          {/* Vinyl disc divider */}
          <DiscDivider />

          {/* ── Education ── */}
          <div className={styles.block}>
            <p className={styles.blockLabel}>Education &amp; Organizations</p>
            <div className={styles.grooveWrap}>
              <div className={styles.grooveLine} aria-hidden="true" />
              {education.map((entry) => (
                <EducationEntry key={entry.trackId} entry={entry} />
              ))}
            </div>
          </div>

          {/* Certifications credits block */}
          <CreditsBlock certifications={certifications} />

        </div>
      </div>
    </section>
  );
}
