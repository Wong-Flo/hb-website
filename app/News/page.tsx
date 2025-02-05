import Link from 'next/link';
import styles from './news.module.css';

export default function News() {
  return (
    <>
      <h2 className={styles.NewsTitle}>This is the news Page</h2>
      <span className={styles.Date}>Date: </span>

      <span className={styles.selectedDate}>11.November 2022</span>
      <br />
      <span className={styles.Category}>Category: </span>
      <span className={styles.Article}>
        <u>Der Standard</u>
        <Link href="https://www.derstandard.at/story/2000140613908/aeltestes-dim-sum-lokal-wiens-happy-buddhas-neue-bleibe" >
        <a target="_blank" rel="noopener"
      </span>
    </>
  );
}
