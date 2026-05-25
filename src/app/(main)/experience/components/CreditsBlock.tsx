import type { Certification } from '@/types/experience';
import styles from './CreditsBlock.module.css';

type CreditsBlockProps = {
  certifications: Certification[];
};

export default function CreditsBlock({ certifications }: CreditsBlockProps) {
  return (
    <div className={styles.block}>
      <p className={styles.label}>Credits &amp; certifications</p>
      <ul className={styles.grid}>
        {certifications.map((cert) => (
          <li key={cert.name} className={styles.cert}>
            <span className={styles.certName}>{cert.name}</span>
            <span className={styles.certIssuer}>{cert.issuer}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
