import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section
      id="work"
      className={styles.section}
      aria-labelledby="hero-heading"
    >
      <div className={styles.layout}>
        {/* ── Copy column ── */}
        <div className={styles.copy}>
          {/* Heading */}
          <h1 id="hero-heading" className={styles.heading}>
            Fine-tuning systems
            <br />
            <span className={styles.headingAccent}>& composing solutions.</span>
          </h1>

          {/* Sub-copy */}
          <p className={styles.subCopy}>
            Industrial engineer and web developer bridging process design and
            full-stack execution.
          </p>

          {/* CTA row */}
          <div className={styles.ctaRow}>
            <button className={styles.btnPrimary} type="button">
              View Portfolio
            </button>
            <button className={styles.btnGhost} type="button">
              Read Story
            </button>
          </div>
        </div>

        {/* ── Visual column ── */}
        <div className={styles.visual}>
          <div className={styles.featuredCard}>
            {/* Gradient overlay */}
            <div className={styles.imageOverlay} aria-hidden="true" />

            {/* Featured image */}
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWbKGQnUCOjNpnTnooDxKok8iXm4J8j-aWAVdg0Traav_96kAR1UOfAV7RpQwLmodBB-I8lu_3CQuWTOPNHQB7DNr1mRbdh5kEY7TR2vDlk9Uzgbghpafp6y5ualJBL2h3tQCcDl8uhnxGTuXAwN0eLEGJmEeft2ydbArPVJcxtcCd991J7xYqUrPVJxgcWM0z76zC5lwKC96Cekb0LnJkjQS882E2Cywvu6m0xM-r2naJ5vWXhsG8mDKPR-FozapC7oQSOUD_0tSn"
              alt="Echoes & Dust — a moody, cinematic high-end audio setup with dramatic low-key lighting, gold and silver reflections against deep navy shadows"
              fill
              className={styles.featuredImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* Card copy */}
            <div className={styles.cardCopy}>
              <div className={styles.cardLabel}>
                <span className={styles.cardLabelDot} aria-hidden="true" />
                <span className={styles.cardLabelText}>Featured</span>
              </div>
              <h2 className={styles.cardTitle}>Echoes &amp; Dust</h2>
              <p className={styles.cardSub}>
                Interactive visualizer for modern jazz ensembles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
