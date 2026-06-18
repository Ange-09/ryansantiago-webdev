import HeroSection from "./home/HeroSection/HeroSection";
import FeaturedWork from "./home/FeaturedWork/FeaturedWork";
import QuietSignOff from "./home/Outro/QuietSignOff";
import DevIntro from "./home/About/DevIntro";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <HeroSection />
      </section>
      <section className={styles.section}>
        <DevIntro />
      </section>
      <section className={styles.section}>
        <FeaturedWork />
      </section>
      <section className={styles.section}>
        <QuietSignOff />
      </section>
    </main>
  );
}
