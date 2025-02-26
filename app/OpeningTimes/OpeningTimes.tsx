import styles from './OpeningTimes.module.css';

export default function OpeningTimes() {
  return (
    <div className={styles.OpeningTimes}>
      <h2></h2>
      <div className={styles.TimeRow}>
        <span className={styles.Day}>Monday </span>
        <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
      </div>
      <div className={styles.TimeRow}>
        <span className={styles.Day}>tuesday </span>
        <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
      </div>
      <div className={styles.TimeRow}>
        <span className={styles.Day}>wednesday </span>
        <span className={styles.Closed}>Geschlossen</span>
      </div>
      <div className={styles.TimeRow}>
        <span className={styles.Day}>thursday </span>
        <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
      </div>
      <div className={styles.TimeRow}>
        <span className={styles.Day}>Friday </span>
        <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
      </div>
      <div className={styles.TimeRow}>
        <span className={styles.Day}>Saturday </span>
        <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
      </div>
      <div className={styles.TimeRow}>
        <span className={styles.Day}>Sunday </span>
        <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
      </div>
      <p className={styles.LastOrder}>*Last Order 30 minutes before closing*</p>
    </div>
  );
}
