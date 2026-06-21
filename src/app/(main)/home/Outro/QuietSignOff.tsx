import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./QuietSignOff.module.css";

interface SocialLink {
  label: string;
  href: string;
  isPrimary?: boolean;
  icon: ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:angelosantiago3283@gmail.com",
    isPrimary: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.83.23-1.5 1.5-1.5h1.6V4.2A14 14 0 0 0 14.7 4c-2.4 0-4.2 1.46-4.2 4.15V10.5H8v3h2.5V21h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ryan-angelo-santiago",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88zM5.25 10.25h3.38V19H5.25v-8.75zM10.94 10.25h3.24v1.2h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.06 2.25 4.06 5.18V19h-3.38v-3.7c0-.88-.02-2-1.22-2-1.22 0-1.41.95-1.41 1.94V19h-3.38v-8.75z" />
      </svg>
    ),
  },
];

export default function QuietSignOff() {
  return (
    <section className={styles.signoff} aria-label="Sign-off">
      <p className={styles.note}>
        &ldquo;Feel free to reach out on any platform.&rdquo;
      </p>

      <ul className={styles.iconRow}>
        {socialLinks.map((social) => (
          <li key={social.label}>
            <Link
              href={social.href}
              aria-label={social.label}
              className={`${styles.icon} ${
                social.isPrimary ? styles.iconPrimary : ""
              }`}
            >
              <span className={styles.iconGlyph}>{social.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
