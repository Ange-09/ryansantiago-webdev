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
      <HeroBackground />

      <div className={styles.layout}>
        <div className={styles.copy}>
          <h1 id="hero-heading" className={styles.heading}>
            Transform Your Ideas
            <br />
            <span className={styles.headingAccent}>
              Into Digital Solutions.
            </span>
          </h1>

          <div className={styles.ctaRow}>
            <Link href="/contact">
              <button className={styles.btnPrimary} type="button">
                Let&apos;s Connect
              </button>
            </Link>
            <Link href="/background">
              <button className={styles.btnGhost} type="button">
                My Background
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={styles.heroVideo}
          >
            <source src="/vid/herovid.mp4" type="video/mp4 " />{" "}
          </video>
        </div>
      </div>
    </section>
  );
}
