import styles from "./HeroSection.module.css";
import Link from "next/link";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  return (
    <section
      id="work"
      className={styles.section}
      aria-labelledby="hero-heading"
    >
      {/* WebGL plasma-waveform background — renders below all hero content */}
      <HeroBackground />

      <div className={styles.layout}>
        <div className={styles.copy}>
          <h1 id="hero-heading" className={styles.heading}>
            Fine-tuning systems
            <br />
            <span className={styles.headingAccent}>& composing solutions.</span>
          </h1>

          <p className={styles.subCopy}>
            Industrial engineer and web developer bridging process design and
            full-stack execution.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/compositions">
              <button className={styles.btnPrimary} type="button">
                View Compositions
              </button>
            </Link>

            <Link href="/contact">
              <button className={styles.btnGhost} type="button">
                Let&apos;s Connect
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
