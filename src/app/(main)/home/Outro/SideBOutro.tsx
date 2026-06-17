import Link from "next/link";
import styles from "./SideBOutro.module.css";

interface TrackItem {
  number: string;
  label: string;
  played: boolean;
}

const tracks: TrackItem[] = [
  { number: "01", label: "Hero", played: true },
  { number: "02", label: "Featured work", played: true },
  { number: "03", label: "Compositions", played: false },
  { number: "04", label: "Background", played: false },
];

export default function SideBOutro() {
  return (
    <section className={styles.outro} aria-label="Closing note">
      <p className={styles.tag}>Side B</p>

      <ul className={styles.tracklist}>
        {tracks.map((track) => (
          <li key={track.number} className={styles.track}>
            <span className={styles.trackNum}>{track.number}</span>
            <span className={styles.trackName}>{track.label}</span>
            <span
              className={`${styles.trackLine} ${
                track.played ? styles.trackLinePlayed : ""
              }`}
            />
          </li>
        ))}
      </ul>

      <p className={styles.note}>
        &ldquo;Still composing — the next track is up to you.&rdquo;
      </p>

      <Link href="/contact" className={styles.link}>
        Reach out, no obligation
      </Link>
    </section>
  );
}
