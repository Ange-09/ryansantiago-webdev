import HeroSection from "./home/HeroSection/HeroSection";
import FeaturedWork from "./home/FeaturedWork/FeaturedWork";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <HeroSection />
      </section>
      <section className={styles.section}>
        <FeaturedWork />
      </section>
    </main>
  );
}
