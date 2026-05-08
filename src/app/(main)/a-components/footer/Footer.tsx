import Link from 'next/link';
import styles from './Footer.module.css';

interface SocialLink {
  label: string;
  href: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Dribbble',  href: '#' },
  { label: 'GitHub',    href: '#' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <Link href="/" className={styles.brand} aria-label="VERVE — home">
          VERVE
        </Link>

        {/* Copyright */}
        <p className={styles.copyright}>
          &copy; 2024 VERVE Studio. Curated for the midnight hours.
        </p>

        {/* Social links */}
        <ul className={styles.socials} aria-label="Social links">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className={styles.socialLink}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
