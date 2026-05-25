import styles from './DiscDivider.module.css';

export default function DiscDivider() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.line} />
      <svg
        className={styles.disc}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="14" cy="14" r="13" fill="#0d1e33" stroke="#1a3050" strokeWidth="0.5" />
        <circle cx="14" cy="14" r="9" fill="none" stroke="#1a3050" strokeWidth="0.5" />
        <circle cx="14" cy="14" r="5" fill="none" stroke="#1a3050" strokeWidth="0.5" />
        <circle cx="14" cy="14" r="4" fill="rgba(200,168,74,0.2)" />
        <circle cx="14" cy="14" r="1.5" fill="#07101f" />
      </svg>
      <div className={styles.line} />
    </div>
  );
}
