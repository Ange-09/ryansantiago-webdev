import HeroSection from "./home/HeroSection/HeroSection";
import FeaturedWork from "./home/FeaturedWork/FeaturedWork";
import DevIntro from "./home/About/DevIntro";
import RevealSection from "./home/RevealSection/RevealSection";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <HeroSection />
      </section>

      <section className={styles.section}>
        <RevealSection>
          <DevIntro />
        </RevealSection>
      </section>
      <RevealSection>
        <section className={styles.section}>
          <FeaturedWork />
        </section>
      </RevealSection>
    </main>
  );
}
